import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 35rem;
  margin: 0 auto;

  form {
    max-width: 35rem;
    height: 3.375rem;
    margin: 2rem auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    textarea {
      min-width: 30rem;
      height: 100%;
      background: ${(props) => props.theme['gray-900']};
      border-radius: 0.5rem;
      border: 0;
      color: ${(props) => props.theme['gray-100']};
      text-align: left;
      padding-left: 2rem;
      resize: none;
      padding-top: 1rem;
    }
  }

  button {
    &:hover {
      outline: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    form {
      height: 2.5rem;
      textarea {
        min-width: 18rem;
        padding-left: 1rem;
        padding-top: 0.75rem;

        font-size: 0.8rem;
      }
    }

    button {
      width: 2rem;
      height: 2rem;
      font-size: 0.8rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  padding-bottom: 1rem;

  span {
    height: 16px;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    color: ${(props) => props.theme['green-300']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    max-width: 19rem;
    height: 2.5rem;
    h4 {
      font-size: 0.8rem;
    }
    span {
      height: 14px;
      margin-top: 0.2rem;

      font-size: 0.8rem;

      svg {
        width: 0.8rem;
        height: 0.8rem;
      }

      p {
        font-size: 0.8rem;

        margin-left: 0.2rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export const Main = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  overflow-y: auto; // Adiciona barra de rolagem
  max-height: 195px; // Define altura máxima

  &::-webkit-scrollbar {
    width: 0;
  }
  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    max-width: 20rem;
  }
`

export const NoTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    svg {
      width: 2rem;
    }

    h3,
    span {
      text-align: center;
      font-size: 0.8rem;
    }
  }
`
