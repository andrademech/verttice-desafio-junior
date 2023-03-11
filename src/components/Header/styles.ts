import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface NavbarProps {
  extendNavbar: boolean
}

export const NavbarContainer = styled.nav<NavbarProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '40px' : '40px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`

export const NavbarLinkExtended = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;

  &:first-child {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 700px) {
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const OpenLinksButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    color: ${(props) => props.theme['green-500']};
  }

  @media (max-width: 700px) {
    display: block;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;
  flex-wrap: wrap;
  border-radius: 6px;
  height: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`
