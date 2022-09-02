import { AlertDelete } from "./styles"
import React from "react"

const ConfirmDelete = ({ uploadFileName, onChangeShowTrue, onChangeShowFalse }) => (
    <AlertDelete>
        <div className="box">
            <span>{`Você tem certeza que deseja excluir o item `}<span className="item-delete">{uploadFileName}</span></span>
            <div>
                <button className="btn-confirm" onClick={onChangeShowTrue}>Sim</button>
                <button className="btn-cancel" onClick={onChangeShowFalse}>Não</button>
            </div>
        </div>
    </AlertDelete>
)

export default ConfirmDelete