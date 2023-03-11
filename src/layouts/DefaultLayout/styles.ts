import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 7rem);
  margin: 3rem auto;
  padding: 2rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  /* =============== MEDIA QUERIES (LARGE DEVICES) =============== */

  @media screen and (max-width: 1250px) {
    max-width: 50rem;
    height: calc(100vh - 8rem);

    margin-top: 2rem;
    h1 {
      font-size: 1.5rem;
    }

    p {
      max-width: 30rem;

      font-size: 0.75rem;
    }
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    max-width: 42rem;
    height: calc(100vh - 5rem);

    margin-top: 2rem;
    h1 {
      font-size: 1.5rem;
    }

    p {
      max-width: 30rem;

      font-size: 0.75rem;
    }
  }

  /* =============== MEDIA QUERIES (SMALL DEVICES) =============== */

  @media screen and (max-width: 730px) {
    max-width: 30rem;
    height: calc(100vh - 5rem);

    margin-top: 2rem;
    h1 {
      font-size: 1.5rem;
    }

    p {
      max-width: 30rem;

      font-size: 0.75rem;
    }
  }
`
