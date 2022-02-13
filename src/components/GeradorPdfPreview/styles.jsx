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
        @media (max-width: 600px){
            bottom: 0;
            left:65%;
            height: 50px;
            background-color: transparent;

        }
    }
    .btnProximo:hover{
        background: #bebebe;
        cursor: pointer;
        @media (max-width: 600px){
            padding: 4px;
            background-color: transparent;
        }
    }
    .btnAnterior:hover{
        background: #bebebe;
        cursor: pointer;
        @media (max-width: 600px){
            padding: 4px;
            background-color: transparent;
        }
    }
    .btnAnterior{
        position: absolute;
        left: 10%;
        width: 40px;
        height: 70px;
        border: none;
        background-color: #bebebe40;
        @media (max-width: 600px){
            bottom: 0;
            left:30%;
            height: 50px;
            background-color: transparent;            
        }
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
        @media (max-width: 600px){
            top: 0;
            left: 45%;
        }
    }.voltar:hover{
        padding: 12px;
        cursor:pointer;
    }
`