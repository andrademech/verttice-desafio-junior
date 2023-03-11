import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  user-select: none;

  @media screen and (min-width: 450px) {
    min-width: 340px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled(Flex)`
  justify-content: space-between;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.2rem;
`

export const Input = styled.div`
  width: 100%;
  max-width: 21rem;
  height: 55px;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-900']};
  text-align: right;
  margin: 1.3rem 0;
  border-radius: 0.5rem;
  gap: 0.5rem;

  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  background-color: ${(props) => props.theme['gray-900']};
  min-height: 290px;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 65px));
  grid-auto-rows: 40px;
  gap: 1.2rem 0.9rem;
  align-items: center;
  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(65px, 67px));
  }
`

const BUTTON_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'danger',
} as const

interface ButtonProps {
  color: keyof typeof BUTTON_COLORS
}

type Props = {
  bg?: ButtonProps['color']
  gc?: string
}

export const Button = styled(Flex)<Props>`
  border-radius: 0.3rem;
  padding: 10px;
  font-size: 1.2rem;
  opacity: 0.8;
  cursor: pointer;
  max-width: ${(props) => (props.gc ? '100%' : '65px')};
  grid-column: ${(props) => (props.gc ? props.gc : 'auto')};
  color: ${(props) => props.theme['gray-100']};

  background-color: ${(props) => props.theme[BUTTON_COLORS[props.bg!]]};

  &:hover {
    opacity: 1;
  }
`
