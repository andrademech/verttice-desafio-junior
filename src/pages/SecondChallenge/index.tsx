import { priceFormatter } from '../../utils/formatter'
import { Container, Header, MoviesTable, StyledTable } from './styles'

interface Filme {
  titulo: string
  classificacao: number
  orcamento: number
}

const filmes: Filme[] = [
  {
    titulo: 'The Godfather',
    classificacao: 9.2,
    orcamento: 6000000,
  },
  {
    titulo: 'The Shawshank Redemption',
    classificacao: 9.3,
    orcamento: 25000000,
  },
  {
    titulo: 'The Dark Knight',
    classificacao: 9.0,
    orcamento: 185000000,
  },
  {
    titulo: 'Pulp Fiction',
    classificacao: 8.9,
    orcamento: 8000000,
  },
  {
    titulo: 'The Lord of the Rings: The Return of the King',
    classificacao: 8.9,
    orcamento: 94000000,
  },
  {
    titulo: 'The Good, the Bad and the Ugly',
    classificacao: 8.8,
    orcamento: 1200000,
  },
]

export function SecondChallenge() {
  return (
    <>
      <Header>
        <h1>Challenge number 2</h1>
        <p>
          Description: Implementar uma função que recebe uma lista de objetos
          com informações de um filme e retorna o valor total do orçamento de
          todos os filmes que tiveram uma classificação maior ou igual a 7.0.
        </p>
      </Header>
      <Container>
        <h2>Movies</h2>
        <StyledTable>
          <MoviesTable>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Classificação</th>
                <th>Orçamento</th>
              </tr>
            </thead>
            <tbody>
              {filmes.map((filme) => (
                <tr key={filme.titulo}>
                  <td>{filme.titulo}</td>
                  <td>{filme.classificacao}</td>
                  <td>{priceFormatter.format(filme.orcamento)}</td>
                </tr>
              ))}
            </tbody>
          </MoviesTable>
        </StyledTable>

        <h2>Result</h2>
        <strong>
          {priceFormatter.format(
            filmes
              .filter((filme) => filme.classificacao >= 7)
              .reduce((acc, filme) => acc + filme.orcamento, 0),
          )}
        </strong>
      </Container>
    </>
  )
}
