import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme['gray-100']};
  gap: 1rem;
  p {
    max-width: 45rem;
    text-align: justify;
    overflow-y: auto; // Adiciona barra de rolagem
    max-height: 135px; // Define altura máxima
    padding: 0 1rem; // Adiciona espaçamento horizontal

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    max-width: 35rem;
  }
`
