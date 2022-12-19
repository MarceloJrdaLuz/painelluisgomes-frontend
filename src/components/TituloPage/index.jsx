import React, { useState } from "react";
import Botao from "../Button";
import GeradorPdf from "../GeradorPdfPreview";
import { Container, Title } from "./styles";

export default function TituloPage({ ...props }) {
    const visivel = props.pdfShow;
    const exibir = props.item;
    const [padroes, setPadroes] = useState(false);
    
    function renderPadroes() {
        return (
            <ul>
                <li>Programação da Reunião Vida e Ministério - <span className='red'>"Mes"</span></li>
                <li>Visita do Superintendente - <span className='red'>"Visita"</span></li>
                <li>Relatório de Contas - <span className='red'>"Financeiro"</span></li>
                <li>Assembléias - <span className='red'>"Assembleias"</span></li>
                <li>Congresso - <span className='red'>"Congresso"</span></li>
                <li>Cartas - <span className='red'>"Carta1" ou "Carta2"</span></li>
                <li>Programação de Campo - <span className='red'>"Campo"</span></li>
                <li>Programação de limpeza - <span className='red'>"Limpeza"</span></li>
                <li>Programação da Reunião Pública - <span className='red'>"Publica"</span></li>
            </ul>
        )
    }
    return (
        <>
            <Container pdf={visivel ? true : false}>
                <section>
                    {visivel && (
                        <GeradorPdf onChangePdf={props.onChangePdfShow} item={exibir} rotate={exibir === 'Assembleias.pdf' || exibir === 'Visita.pdf' ? 270 : 0} />
                    )}
                </section>
                {!visivel && (
                    <div>
                        {!padroes ? (
                            <>
                                <Title>
                                    Programações - Congregação Luis Gomes
                                </Title>
                                <Botao texto='Padrão Nomes de Arquivos' onClick={() => setPadroes(true)}></Botao>
                            </>
                        ) : renderPadroes()}
                    </div>
                )}

            </Container>
        </>

    )
}