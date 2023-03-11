import { Challenge, ContainerChallenge, HomeContainer } from './styles'

import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <HomeContainer>
      <nav>
        <ContainerChallenge>
          <NavLink to="/first" title="first challenge">
            <Challenge>
              <h2>Challenge 1</h2>
            </Challenge>
          </NavLink>
          <NavLink to="/second" title="second challenge">
            <Challenge>
              <h2>Challenge 2</h2>
            </Challenge>
          </NavLink>
          <NavLink to="/third" title="third challenge">
            <Challenge>
              <h2>Challenge 3</h2>
            </Challenge>
          </NavLink>
          <NavLink to="/fourth" title="fourth challenge">
            <Challenge>
              <h2>Challenge 4</h2>
            </Challenge>
          </NavLink>
          <NavLink to="/fifth" title="fifth challenge">
            <Challenge>
              <h2>Challenge 5</h2>
            </Challenge>
          </NavLink>
        </ContainerChallenge>
      </nav>
    </HomeContainer>
  )
}
