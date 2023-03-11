import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme['gray-100']};
  gap: 2rem;

  p {
    max-width: 40rem;
    text-align: justify;
    font-size: 1rem;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    h2,
    p {
      font-size: 0.75rem;
    }
  }
`

export const Container = styled.main`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Output = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  gap: 1rem;
  width: 100%;
  justify-content: center;
  padding-bottom: 2rem; // Adiciona margem inferior

  overflow-y: auto; // Adiciona barra de rolagem
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1024px;
  justify-content: center;
  align-items: center;

  ul {
    border-radius: 8px;
    list-style: none;
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['gray-900']};
    padding-top: 1rem;

    gap: 1rem;
    overflow-y: auto; // Adiciona barra de rolagem
    max-height: 150px; // Define altura máxima
    padding: 0 1rem; // Adiciona espaçamento horizontal

    li {
      width: 180px;
    }
  }
  ul::-webkit-scrollbar {
    width: 0;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    ul {
      li {
        font-size: 0.75rem;
      }
    }
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const BaseInput: any = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
    transition: border-color 0.5s;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    font-size: 0.75rem;
    padding: 0;
    margin: 0;
    height: 1.5rem;
  }
`

export const FormInput = styled(BaseInput)`
  flex: 1; // flew grow, flex shrink, flex basis

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
