import styled from "styled-components";


export const AlertDelete = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans';
    .box {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 30%;
        background-color: rgba(0,0,0,0.9);
        border-radius: 30px;
        box-shadow: 2px solid; 
    }

    div {
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 20px;
        font-weight: bold;
        font-size: 1rem;
        color: white;
        text-align: center;
    }

    .item-delete{
        color: #9b0606;
        font-weight: 900;
        margin: 7px;
        font-size: 1.2rem;
    }
    
    button {
        width:30%;
        margin:5px;
        min-width: 130px;
        max-width: 190px;
        border-radius: 20px;
        padding: 10px 5px;
        font-size: 1.1rem;
        font-family: 'Open Sans'
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