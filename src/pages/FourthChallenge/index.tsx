import { Tasks } from './components/Tasks/Tasks'
import { Container, Header } from './styles'

export const FourthChallenge = () => {
  return (
    <>
      <Header>
        <h1>Challenge number 4</h1>
        <p>
          Crie uma lista de tarefas a fazer, com a possibilidade de adicionar e
          remover itens da lista. Cada tarefa deve ter um checkbox que permite
          marcar a tarefa como concluída ou não. As tarefas concluídas devem ser
          exibidas em uma cor diferente. A página deve ser responsiva.
        </p>
      </Header>
      <Container>
        <Tasks />
      </Container>
    </>
  )
}
