import styled from "styled-components";

export const ContainerPdf = styled.div`
    width: 700px;
    height:700px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    .btnProximo{
        position: absolute;
        right: 10%;
        width: 40px;
        height: 70px;
        border: none;
        background-color: #bebebe40;
    }
    .btnProximo:hover{
        background: #bebebe;
        cursor: pointer;
    }
    .btnAnterior:hover{
        background: #bebebe;
        cursor: pointer;

    }
    .btnAnterior{
        position: absolute;
        left: 10%;
        width: 40px;
        height: 70px;
        border: none;
        background-color: #bebebe40;
    }
    .voltar{
        position: absolute;
        top:5px;
        left: 7%;
        width: 50px;
        height: 50px;
        padding:10px;
        border: none;
        background-color: transparent;
        border-radius: 25px;
    }.voltar:hover{
        padding: 12px;
        cursor:pointer;
    }
`