import {
  Container,
  FormContainer,
  Header,
  List,
  Output,
  FormInput,
  Main,
} from './styles'

import { ChangeEvent, useState } from 'react'

export function FirstChallenge() {
  const [inputValue, setInputValue] = useState('')
  const [charCount, setCharCount] = useState<Record<string, number>>({})

  function countChars(str: string): Record<string, number> {
    const charCount: Record<string, number> = {}

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (charCount[char]) {
        charCount[char]++
      } else {
        charCount[char] = 1
      }
    }

    return charCount
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const str = event.target.value
    setInputValue(str)
    const count = countChars(str)
    setCharCount(count)
  }

  return (
    <Main>
      <Header>
        <h2>Challenge number 1</h2>
        <p>
          Description: Escreva uma função que receba uma string e retorne a
          contagem de cada caractere nessa string. Por exemplo, para a string
          Hello World, a função deve retornar um objeto que mapeia cada
          caractere ao seu número de ocorrências.
        </p>
      </Header>
      <Container>
        <form>
          <FormContainer>
            <label htmlFor="Insira o caractere">
              <FormInput
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Insira o caractere"
              />
            </label>
          </FormContainer>
        </form>

        <Output>
          <p>
            String digitada: <strong>{inputValue}</strong>
          </p>
          <p>Contagem de caracteres:</p>
          <List>
            <ul>
              {Object.entries(charCount).map(([char, count]) => (
                <li key={char}>
                  {char}: {count} vez(es)
                </li>
              ))}
            </ul>
          </List>
        </Output>
      </Container>
    </Main>
  )
}
