import React from 'react';
import styled from 'styled-components';
import profileImage from '../imagens/img.jpg';

const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  text-align: right;
  position: absolute;
  width: 30vw;
  max-width: 400px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  right: 20px;
`;
const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%; 
`;


const StyledParagraph = styled.p`
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;

  &:hover {
    color: blue; 
  }
`;

function Aside() {
  return (
    <div>
      <StyledAside>
        <StyledParagraph>
          Manoel Gomes, conhecido como "Caneta Azul", é um cantor e compositor brasileiro que se tornou uma sensação viral em 2019. Originário do Maranhão, sua paixão pela música o levou a escrever e tocar violão desde jovem. No entanto, foi a gravação caseira de sua música "Caneta Azul" que o catapultou para a fama.
        </StyledParagraph>
        <ProfileImage src={profileImage} alt="Perfil" />
        <StyledParagraph>
          A simplicidade e autenticidade da música cativaram o público, e a expressão "Caneta Azul" se espalhou rapidamente pelas redes sociais, gerando memes e paródias. Manoel Gomes logo foi convidado para programas de TV e rádio, expandindo sua visibilidade.
        </StyledParagraph>
        <StyledParagraph>
          Embora tenha lançado mais músicas, nenhuma alcançou a mesma popularidade. Sua jornada exemplifica como a internet pode transformar artistas desconhecidos em celebridades instantâneas e como a autenticidade pode conquistar o público. Mesmo sendo um fenômeno momentâneo, Manoel Gomes permanece como um marco peculiar na cultura pop brasileira.
        </StyledParagraph>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
          <SocialLink href="https://twitter.com/seuPerfil" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/seuPerfil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://www.instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">
            Instagram
            </SocialLink>
        </SocialLinks>
        
      </StyledAside>
    </div>
  );
}

export default Aside;
