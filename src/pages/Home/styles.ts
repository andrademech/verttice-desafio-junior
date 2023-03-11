import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    a {
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    /* Estilos para dispositivos móveis */
    padding: 1rem;
  }
`

export const ContainerChallenge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    /* Estilos para tablets */
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    /* Estilos para dispositivos móveis */
    gap: 0.75rem;
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }
`

export const Challenge = styled.div`
  background: ${(props) => props.theme['green-500']};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['green-300']};
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    /* Estilos para dispositivos móveis */
    padding: 1rem;
    font-size: 0.6rem;
  }
`
