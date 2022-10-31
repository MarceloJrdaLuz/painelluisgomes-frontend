import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContainer } from "./styles";

export default function Menu(){
    const navigate = useNavigate()
    const [paginaAtiva, setPaginaAtiva] = useState('Designações')
    useEffect(()=>{
        setPaginaAtiva(document.title)

    },[])
    return(
        <MenuContainer>
            <ul>
                <li className={`${paginaAtiva === "Designações" && "ativa"}`} onClick={() => navigate('/')}>Designações</li>
                <li className={`${paginaAtiva === "Dirigentes" && "ativa"}`} onClick={() => navigate('/dirigentes')}>Dirigentes de Grupo</li>
            </ul>
        </MenuContainer>
    )
}