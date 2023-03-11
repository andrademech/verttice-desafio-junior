import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Container, FormContainer, Header, Output, FormInput } from './styles'

export function ThirdChallenge() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [product, setProduct] = useState<number>(0)

  function handleAddNumber(event: any) {
    event.preventDefault()
    const newNumber = parseInt(event.target.previousSibling.value)
    setNumbers([...numbers, newNumber])
    event.target.previousSibling.value = ''
  }

  function calculateProduct(event: any) {
    event.preventDefault()
    const sortedNumbers = [...numbers].sort((a, b) => b - a)
    const product = sortedNumbers[0] * sortedNumbers[1]

    setProduct(product)
  }

  function handleClearForm() {
    setNumbers([])
    setProduct(0)
  }

  return (
    <>
      <Header>
        <h1>Challenge number 3</h1>
        <p>
          Description: implementar uma função que recebe um array de números
          inteiros e retorna o maior produto possível entre dois números nesse
          array. Por exemplo, para o array [10, 3, 5, 6, 20], a função deve
          retornar o valor 200 (que é o produto entre os números 10 e 20, que
          são os maiores números do array). A função deve suportar arrays de
          qualquer tamanho (incluindo arrays vazios e com apenas um elemento), e
          deve ser eficiente em termos de tempo de execução e uso de memória.
        </p>
      </Header>
      <Container>
        <form action="" onSubmit={calculateProduct}>
          <FormContainer>
            <label htmlFor="">
              <FormInput type="number" placeholder="Insira os números" />
              <button type="button" onClick={handleAddNumber}>
                Add
              </button>
              <button type="submit">Calculate</button>
              <button type="reset" onClick={handleClearForm}>
                <Trash size={20} />
              </button>
            </label>
            <Output>
              <h4>Array:</h4>

              <ul>
                {numbers.map((number) => (
                  <li key={number}>- {number}</li>
                ))}
              </ul>
              {product === 0 ? (
                <p>Insira dois números para calcular o produto</p>
              ) : (
                <>
                  <p>O produto dos dois maiores números é: {product}</p>
                </>
              )}
            </Output>
          </FormContainer>
        </form>
      </Container>
    </>
  )
}
