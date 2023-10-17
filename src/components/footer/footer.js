import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
 background-color: black;
 position: relative;
 width: 100%;
 top:1100px;
 color: white; 
 height: 250px;
`;

const StyledIndice = styled.div`
position: absolute;
left: 50%; 
bottom: 0; 
transform: translateX(-50%); 
color: white;
padding: 10px;
`;

const StyledContato = styled.div`
  position: absolute;
  right: 30px; 
  top: 40%; 
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledTitulo = styled.div`
  position: absolute;
  right: 100px;  
  top: 0; 
  color: white;
  padding: 10px;
  
`;

const StyledLinks= styled.div`
  position: absolute;
  left: 900px; 
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  a {
    color: white;
    text-decoration: none;
    margin:5px;
  }
 
  
`;

const StyledSobremim= styled.div`
  position: absolute;
  left: 0; 
  color: white;
  padding: 10px;
  width: 800px; 
  height: 200px; 
`;






export default class footer extends Component {
  render() {
    return (
        <StyledFooter>
          
        <StyledSobremim>
          <h2>sobre nós:</h2>
          <div>
          Rui, Luigi, Cauã, Carlos e Davi, alunos de Engenharia de Software, colaboraram para criar um site incrível para Manoel Gomes, destacando sua música "Caneta Azul". Com habilidades em design, programação, marketing, conteúdo e interatividade, a equipe conquistou fãs e agradou Manoel com um site cativante.
          </div>
        </StyledSobremim>
        <StyledLinks>
        <h2>navegação</h2>
        <a href="/">home</a>
        <a href="/">sobre nos</a>
        <a href="/">contato</a>
        <a href="/">blog</a>
        <a href="/">faq</a>
        </StyledLinks>

       <StyledIndice>Copyright © 2023 manoel Inc. Todos os direitos reservados.</StyledIndice>
       
       <StyledTitulo><h2>contato</h2></StyledTitulo>
       <StyledContato> 
       <div class="item">email: manoel@faip.com.br</div>
       <br />
       <div class="item">tel: 55 11 73846-47682</div>
       </StyledContato>
       </StyledFooter>
    )
  }
}
