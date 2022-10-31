import React from "react"
import { BotaoFormsStyle } from "./style"

export default function BotaoForms({...props}){
    return (
        <BotaoFormsStyle type={props.type}>
            {props.texto}
        </BotaoFormsStyle>
    )
}