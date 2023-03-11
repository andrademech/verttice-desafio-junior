import { Calculator } from './components'
import { Container, Header } from './styles'

export const FifthChallenge = () => {
  return (
    <>
      <Header>
        <h1>Challenge number 5</h1>
        <p>
          Crie uma calculadora que deve ter deve ter uma interface com um
          display para exibir o resultado das operações, permitir a realização
          de operações básicas de matemática, como adição, subtração,
          multiplicação e divisão, deve permitir a entrada dos valores através
          de botões e teclado, limpeza do display, permitir a utilização do
          último resultado como o primeiro valor da próxima operação, e que seja
          responsiva.
        </p>
      </Header>
      <Container>
        <Calculator />
      </Container>
    </>
  )
}
