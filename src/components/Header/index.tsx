import { useState } from 'react'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from './styles'
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  House,
  List,
  X,
} from 'phosphor-react'

export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false)

  function handleClick() {
    setExtendNavbar(false)
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink
              to="https://www.vertticegr.com.br/"
              title="verttice site"
            >
              Verttice
            </NavbarLink>
            <NavbarLink to="/" title="home">
              <House size={24} />
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              {extendNavbar ? <X size={24} /> : <List size={24} />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="https://github.com/andrademech">
              <GithubLogo size={24} />
            </NavbarLink>
            <NavbarLink to="https://www.linkedin.com/in/herberth-andrade-759b10127/">
              <LinkedinLogo size={24} />
            </NavbarLink>
            <NavbarLink to="https://www.instagram.com/herberth.dev/">
              <InstagramLogo size={24} />
            </NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            to="https://www.vertticegr.com.br/"
            title="verttice site"
            rel="noreferrer"
            target="_blank"
            onClick={handleClick}
          >
            Verttice
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/"
            title="home"
            rel="noreferrer"
            onClick={handleClick}
          >
            <House size={24} />
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="https://github.com/andrademech"
            title="github"
            rel="noreferrer"
            target="_blank"
            onClick={handleClick}
          >
            <GithubLogo size={24} />
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="https://www.linkedin.com/in/herberth-andrade-759b10127/"
            title="linkedin"
            rel="noreferrer"
            target="_blank"
            onClick={handleClick}
          >
            <LinkedinLogo size={24} />
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="https://www.instagram.com/herberth.dev/"
            title="instagram"
            rel="noreferrer"
            target="_blank"
            onClick={handleClick}
          >
            <InstagramLogo size={24} />
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}
