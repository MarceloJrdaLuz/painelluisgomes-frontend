import styled from "styled-components";

export const MenuContainer = styled.nav`
    width: 100vw;
    display: flex;
    position: fixed;
    top:0;
    background-color: rgba(0,0,0,0.4);
    
    ul {
        width: 100%;
        display: flex;

        li {
            list-style: none;
            padding: 20px;
            color: white;
            font-weight: bold;
            cursor: pointer;
        } 
        li:hover{
            background-color: rgba(0,0,0,0.4);
        }
        .ativa{
            background-color: #9b0606;
        }
        .ativa:hover{
            background-color: #9b0606;
        }
    }

`;
