import React from "react";
import background from "../images/background.jpeg"
function MainContent(){
    return(
        <div id="mainPagina">
        <div id="descricaoPagina">
            <div id="headerDescricao">
                <h1>BEM-VINDO À MINHA PÁGINA DE PROJETOS EM REACT!</h1>
            </div>
            <div id="mainDescricao">
                <h4>Olá e bem-vindo à minha página de projetos! Aqui você encontrará uma coleção de projetos desenvolvidos com a biblioteca React, que exemplifica a flexibilidade e a potência desta ferramenta para criar interfaces de usuário interativas e dinâmicas.</h4>
            </div>
            
        </div>
        <div id="bodyPaginaDescricao">
            <div id="vouEncontrar">
                <h1>O que você vai encontrar aqui?</h1>
            </div>
            <div id="listaProjetosEncontrar">
                <ul>
                    <li className="descricaoProjetos"><h5>Projetos Diversos: <span>Desde aplicações simples, como uma lista de tarefas, até projetos mais complexos, como sistemas de autenticação e jogos interativos.</span></h5> </li>
                    <li className="descricaoProjetos"><h5>Detalhes Técnicos: <span>Para cada projeto, você encontrará uma descrição detalhada, incluindo a funcionalidade implementada, os desafios enfrentados e as soluções adotadas.</span></h5> </li>
                    <li className="descricaoProjetos"><h5>Código e exemplos: <span>Acompanhe o código-fonte e veja como cada projeto foi estruturado. Há exemplos práticos que podem servir como referência para suas próprias implementações.</span></h5> </li>
                </ul>
            </div>

        </div>
    </div>
    )
}

export default MainContent;