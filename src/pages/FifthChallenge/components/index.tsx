import { useState, useEffect } from 'react'

import { Container, Input, ButtonContainer, Button } from './styles'

export function Calculator() {
  const [value, setValue] = useState('')

  function calc() {
    if (
      value.includes('+') ||
      value.includes('-') ||
      value.includes('*') ||
      value.includes('/')
    ) {
      // eslint-disable-next-line no-eval
      setValue(eval(value).toString())
    }
  }

  function deleteValue() {
    if (value.slice(-1) === ' ') {
      setValue(value.substring(0, value.length - 3))
    } else if (value.slice(-2) === '0.') {
      setValue(value.substring(0, value.length - 2))
    } else {
      setValue(value.substring(0, value.length - 1))
    }
  }

  function addSimbol(simbol: string) {
    if (value.slice(-1) !== ' ' && value.slice(-1) !== '.') {
      setValue(value + simbol)
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key

    if (/^[0-9.+\-/*\s]$/.test(key)) {
      event.preventDefault()
      setValue(value + key)
    } else if (key === 'Enter' || key === '=') {
      event.preventDefault()
      calc()
    } else if (key === 'Backspace' || key === 'Delete') {
      event.preventDefault()
      deleteValue()
    } else if (key === 'Escape') {
      event.preventDefault()
      setValue('')
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <>
      <Container>
        <Input>{value}</Input>

        <ButtonContainer>
          <Button onClick={() => setValue(value + '7')}>7</Button>
          <Button onClick={() => setValue(value + '8')}>8</Button>
          <Button onClick={() => setValue(value + '9')}>9</Button>
          <Button onClick={() => value.length >= 1 && deleteValue()} bg="red">
            DEL
          </Button>
          <Button onClick={() => setValue(value + '4')}>4</Button>
          <Button onClick={() => setValue(value + '5')}>5</Button>
          <Button onClick={() => setValue(value + '6')}>6</Button>
          <Button onClick={() => value.length >= 1 && addSimbol(' + ')}>
            +
          </Button>

          <Button onClick={() => setValue(value + '1')}>1</Button>
          <Button onClick={() => setValue(value + '2')}>2</Button>
          <Button onClick={() => setValue(value + '3')}>3</Button>
          <Button onClick={() => value.length >= 1 && addSimbol(' - ')}>
            -
          </Button>

          <Button onClick={() => value.length >= 1 && addSimbol('.')}>.</Button>
          <Button onClick={() => setValue(value + '0')}>0</Button>
          <Button onClick={() => value.length >= 1 && addSimbol(' / ')}>
            /
          </Button>
          <Button onClick={() => value.length >= 1 && addSimbol(' * ')}>
            x
          </Button>

          <Button onClick={() => setValue('')} gc="1/3" bg="yellow">
            RESET
          </Button>

          <Button gc="3/5" onClick={calc} bg="green">
            =
          </Button>
        </ButtonContainer>
      </Container>
    </>
  )
}
