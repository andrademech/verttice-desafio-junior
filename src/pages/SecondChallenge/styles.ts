import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme['gray-100']};
  gap: 2rem;
  p {
    max-width: 40rem;
    text-align: justify;
  }
`

export const Container = styled.main`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  strong {
    color: ${(props) => props.theme['green-500']};
    font-size: 1.5rem;
    &:hover {
      color: ${(props) => props.theme['green-300']};
      cursor: pointer;
    }
  }

  /* =============== MEDIA QUERIES (SMALL DEVICES) =============== */

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 0.75rem;
    }
    strong {
      font-size: 1rem;
    }
  }
`

export const StyledTable = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-height: 270px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* mudando a cor de fundo */
  }

  /* =============== MEDIA QUERIES (SMALL DEVICES) =============== */

  @media screen and (max-width: 900px) {
    max-height: 200px;
  }
`

export const MoviesTable = styled.table`
  margin: 0 auto;
  width: 85%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  min-width: 300px;

  thead {
    padding: 1.25rem 2rem;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme['gray-600']};
    border: 0;
    height: 32px;
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  /* =============== MEDIA QUERIES (SMALL DEVICES) =============== */

  @media screen and (max-width: 900px) {
    thead {
      height: 16px;
    }
    td {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  }
`
