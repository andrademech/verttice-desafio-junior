import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 5.625rem;
  height: 100%;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: ${(props) => props.theme['green-300']};
    transition: background 0.2s;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    span {
      display: none;
    }
  }
`
