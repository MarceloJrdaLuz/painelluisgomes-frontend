import React from "react";
import { BotaoStyle } from "./style";


export default function Botao ({...props}){

    return(
        <BotaoStyle onClick={props.onClick}>
            {props.texto}
        </BotaoStyle>
    )
}