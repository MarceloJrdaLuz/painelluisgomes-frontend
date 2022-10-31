import styled from "styled-components";

export const FormStyle = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    align-items: center;

    .btn-voltar{
            width: 30px;
            height: 30px;
            align-self: flex-start;
            margin-left:30px;
        }
    .btn-voltar:hover{
        padding: 2px;
    }


    .form-dirigentes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 50%;
        max-width: 500px;
        max-height: 500px;
        background-color: white;
        border-radius: 50px;
        padding: 15px;

        h1{
            margin: 15px 0;
        }

        input{
            margin: 5px;
            width: 80%;
            height: 30px;
            padding: 10px;
            border: none;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            border-bottom:1px solid #6c757d;
            background-color: #ced4da;
        }
        input:focus{
            border: none;
            border-bottom: 2px solid #006d77;
            background-color: #c0c0c0;
        }
    }
`

export const ModalDirigentes = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center; 
    padding-top:15px;
    overflow: hidden;

    .modal-dirigentes{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: auto;
        max-width: 500px;
        max-height:500px;
        background-color: white;
        border-radius: 50px;
        padding: 15px;
        margin-top:  100px;
        ::-webkit-scrollbar{
            display: none;
        }

        .list-dirigentes{
            width: 100%;
            height: 100%;
            overflow-x: auto;
            position: relative;
            ::-webkit-scrollbar{
            display: none;
            }
        }

        h1{
            text-align: center;
            margin: 25px;
        }

        ul{
            width: 100%;
        }

        li{
            display: flex;
            width: 100%;
            align-items:center;
            justify-content: space-between;
            padding: 10px;
            margin: 10px;
            list-style: none;
            border-top: 1px solid #ccc ;
            border-bottom: 1px solid #ccc;

            span{
                padding: 5px;
            }

            .span-telefone{
                max-width: 100px;
            }
            .span-name{
                max-width: 100px;
            }

            .btn{
                display: flex;
                justify-content: center;
                align-items:center;
                width: 30px;
                height: 30px;
                margin:5px;
                cursor: pointer;
            }

            .btn:hover{
                padding: 2px;
            }
        }

        .add-dirigente{
            border-radius: 100%;
            border: 2px solid #006d77;
            width: 50px;
            height: 50px;
            padding: 10px;
            margin: auto;
            filter: brightness(50%);
            cursor: pointer;
        }
        .add-dirigente:hover{
            border: 2px solid #006d77;
            filter: brightness(100%);
        }
    }
`

export const ConfirmDeleteDirigente = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 90%;
        height: 90%;
        max-width: 500px;
        max-height: 500px;
        background-color: white;
        border-radius: 50px;
        padding: 15px;
        display: flex;
        ::-webkit-scrollbar{
            display: none;
        }

            h3{
                width: 100%;
                flex-wrap:wrap;
            }

            div{
                width: 50%;
                display: flex;
                flex-grow:1;
                justify-content: space-between;
                margin:auto;
            }

            .btn{
                margin:5px;
                min-width: 130px;
                max-width: 190px;
                border-radius: 20px;
                padding: 10px 5px;
                font-size: 1.1rem;
                font-family: 'Open Sans';
                border-style: none;
                text-align: center;
                cursor: pointer;
            }

            .btn-confirm{
            background-color: #edf6f9; 
             }

            .btn-confirm:hover{
            background-color: #006d77;
            color:#edf6f9;
            }

            .btn-cancel{
                background-color: #edf6f9;
            }
            .btn-cancel:hover{
                background-color: #9b0606;
                color: #edf6f9;
            }

`

