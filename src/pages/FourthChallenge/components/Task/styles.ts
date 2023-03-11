import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 35rem;
  height: 3rem;

  border-radius: 8px;

  background: ${(props) => props.theme['gray-600']};

  p {
    flex-wrap: wrap;
    max-width: 39.5rem;
    margin: 2rem 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  /* =============== MEDIA QUERIES (MEDIUM DEVICES) =============== */

  @media screen and (max-width: 900px) {
    height: 2rem;
    width: 19rem;

    p {
      font-size: 0.8rem;
    }

    div {
      gap: 0.5rem;
      svg {
        width: 1rem;
      }
    }

    button {
      width: 1rem;
      height: 1rem;
    }
  }
`

const ButtonModel = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: 0;
`

export const TrashStyle = styled(ButtonModel)`
  color: ${(props) => props.theme['gray-400']};

  &:hover {
    color: ${(props) => props.theme.danger};
    transition: color 0.2s;
  }
`
export const EditStyle = styled(ButtonModel)`
  &:hover {
    color: ${(props) => props.theme['green-300']};
    transition: color 0.2s;
  }
`

interface StatusTaskProps {
  active?: boolean
}

export const CheckButton = styled.button<StatusTaskProps>`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${(props) =>
    props.active ? props.theme['green-500'] : 'transparent'};
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 50%;
  cursor: pointer;
`
