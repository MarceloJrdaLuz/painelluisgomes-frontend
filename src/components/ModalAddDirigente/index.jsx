import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import StickyBox from "react-sticky-box";
import useSWR, { useSWRConfig } from "swr"
import { addIcon, btnReturn, deleteIcon, editIcon } from "../../icons"
import api from "../../services/api"
import { normalizePhoneNumber } from "../../utils/masks"
import BotaoForms from "../BotaoForms"
import { ConfirmDeleteDirigente, FormStyle, ModalDirigentes } from "./styles"

export default function ModalAddDirigente() {

    const { data: getDirigentes } = useSWR('/dirigentes', api)
    const { mutate } = useSWRConfig()

    const [nameAction, setNameAction] = useState("")
    const [phoneAction, setPhoneAction] = useState("")
    const [idAction, setIdAction] = useState("")
    const [dirigentes, setDirigentes] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [actionModal, setActionModal] = useState("")

    const { register, handleSubmit, watch, setValue, reset, formState: { errors }, } = useForm({
        defaultValues: {
            telefone: phoneAction,
            nome: nameAction
        }
    })

    const numeroTelefone = watch('telefone')

    useEffect(() => {
        setValue('telefone', normalizePhoneNumber(numeroTelefone))
    }, [numeroTelefone])

    useEffect(() => {
        reset({
            nome: nameAction,
            telefone: phoneAction
        })
    }, [phoneAction, nameAction])

    useEffect(() => {
        if (getDirigentes) {
            setDirigentes(getDirigentes.data)
        }
    }, [getDirigentes])

    function onSubmit(data) {
        switch (actionModal) {
            case 'create':
                createDirigente(data.nome, data.telefone)
                break;
            case 'update':
                handleUpdate(idAction, data.nome, data.telefone)
                break;
            case 'delete':
                handleDelete(idAction)
                break;

            default:
                break;
        }
    }

    async function createDirigente(name, phone) {
        await api.post('/dirigentes', {
            name,
            phone
        })
        toast.success("Dirigente cadastrado com sucesso!")
        mutate('/dirigentes')
        setIdAction("")
        setNameAction("")
        setPhoneAction("")
        setModalShow(false)
    }

    async function handleUpdate(id, name, phone) {
        await api.put(`/dirigente/${id}`, {
            name,
            phone
        })
        toast.success('Dirigente atualizado com sucesso!')
        mutate('/dirigentes')
        setIdAction("")
        setNameAction("")
        setPhoneAction("")
        setModalShow(false)
    }

    async function handleDelete(id) {
        await api.delete(`/dirigente/${id}`)
        toast.success('Dirigente removido com sucesso!')
        mutate('/dirigentes')
        setModalShow(false)
    }


    function renderModalAddOrEditOrDeleteDirigente(action, name = "", phone = "", id) {
        switch (action) {
            case "create":
                setActionModal('create')
                break;
            case "update":
                setPhoneAction(phone.toString())
                setNameAction(name)
                setIdAction(id)
                setActionModal('update')
                break;
            case "delete":
                setActionModal('delete')
                setNameAction(name)
                setIdAction(id)
                break;
            default:
                break;
        }

        console.log(phoneAction, nameAction, "aqui")

        return (
            <FormStyle>
                {actionModal !== 'delete' ?
                    (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-dirigentes">
                                <span className="btn-voltar" onClick={()=> setModalShow(false)}>{btnReturn}</span>
                                <h1>{actionModal === 'update' ? 'Atualizar Dirigente' : 'Novo Dirigente'}</h1>
                                <input autoComplete="off"  {...register('nome', { required: true })} placeholder={actionModal === 'update' ? "Alterar nome dirigente" : "Nome do dirigente"} />
                                {errors.nome && <span>Campo nome do dirigente é obrigatório</span>}

                                <input autoComplete="off" {...register('telefone', { required: true })} placeholder={actionModal === 'update' ? "Alterar telefone dirigente" : "Telefone do dirigente"} />
                                {errors.telefone && <span>Campo telefone é obrigatório</span>}

                                <BotaoForms type="submit" texto={actionModal === 'update' ? 'Atualizar' : '"Cadastrar"'} />

                            </form>
                        </>
                    )
                    :
                    (
                        <ConfirmDeleteDirigente>
                            <h3>{`Você tem certeza que deseja excluir o dirigente: ${nameAction}`}</h3>
                            <div>
                                <span onClick={() => handleDelete(idAction)} className="btn btn-confirm">Sim</span>
                                <span onClick={() => setModalShow(false)} className="btn btn-cancel">Não</span>
                            </div>
                        </ConfirmDeleteDirigente>
                    )
                }
            </FormStyle>
        )
    }


    return (
        <>
            {modalShow ? (
                renderModalAddOrEditOrDeleteDirigente()
            )

                :

                (
                    <ModalDirigentes>
                        <div className="modal-dirigentes">
                            <div className="list-dirigentes">
                                <h1>Dirigentes</h1>
                                {
                                    dirigentes.map(dirigente => (
                                        <li key={dirigente._id}>
                                            <span className="span-name">Nome: {dirigente.name}</span>
                                            <span className="span-telefone">Telefone: {dirigente.phone}</span>
                                            <div>
                                                <div className="btn" onClick={() => {
                                                    setModalShow(true)
                                                    renderModalAddOrEditOrDeleteDirigente('update', dirigente.name, dirigente.phone, dirigente._id)
                                                }}>{editIcon}</div>
                                                <div className="btn" onClick={() => {
                                                    setModalShow(true)
                                                    renderModalAddOrEditOrDeleteDirigente('delete', dirigente.name, dirigente.phone, dirigente._id)
                                                }}>{deleteIcon}</div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                            <StickyBox>
                                <div onClick={() => {
                                    setModalShow(true)
                                    renderModalAddOrEditOrDeleteDirigente('create')
                                }
                                } className={`add-dirigente`}>
                                    {addIcon("#006d77")}
                                </div>
                            </StickyBox>
                        </div >

                    </ModalDirigentes >
                )
            }
        </>
    )
}