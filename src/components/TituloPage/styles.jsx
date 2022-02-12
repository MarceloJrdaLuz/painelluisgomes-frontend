import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: ${props => props.pdf ? '700px' : '500px'};
    height: ${props => props.pdf ? '700px' : '450px'};
    min-width: ${props => props.pdf ? '700px' : '500px'};
    min-height: ${props => props.pdf ? '700px' : '450px'};
    border-radius:10px;
    background: rgb(229 231 235);
    overflow: hidden;
    transition: all 0.2s ease-in;   
    position: relative;
    @media (max-width: 1100px){
        margin-bottom: 30px; 
    }   
    }
    section{
        align-self: center;
    }
    div{
        display: flex;
        justify-content: center;
    }
    ul{
        width: 100%;
        height: 100%;
    }li{
        padding: 10px;
        text-align: center;
        list-style-type: none;
        font-weight: 700;
        font-size: 14px;
    }.red{
        color: #9b0606;
    }
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 30px;
    color: #9b0606;
`


