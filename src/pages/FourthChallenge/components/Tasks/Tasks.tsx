import {
  useState,
  ChangeEvent,
  InvalidEvent,
  KeyboardEvent,
  FormEvent,
} from 'react'
import { Clipboard } from 'phosphor-react'

// Components
import { Button } from '../Button/Button'
import { Task } from '../Task/Task'
import { Container, Content, Main, NoTasks } from './styles'

interface TaskInterface {
  task: string
  completed: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [newTaskText, setNewTaskText] = useState<string>('')
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault()

    if (newTaskText === '') {
      alert('Este campo é obrigatório.')
      return
    }
    setTasks([...tasks, { task: newTaskText, completed: false }])
    setNewTaskText('')

    console.log('Task created successfully! :D')
  }

  const handleNewTaskChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('')
    setNewTaskText(e.target.value)
  }

  const handleNewTaskInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
    console.log(e.target.setCustomValidity('Este campo é obrigatório.'))
  }

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index))

    console.log('Task removed successfully! :D')
  }

  const handleEditTask = (index: number) => {
    const task = tasks[index]
    const newTask = prompt('Edit task', task.task)

    if (newTask) {
      setTasks(
        tasks.map((task, i) => {
          if (i === index) {
            return { ...task, task: newTask }
          }
          return task
        }),
      )
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      handleCreateNewComment(e)
    }
  }

  const handleTaskCompleted = (index: number) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          if (!task.completed) {
            setCompletedTasks(completedTasks + 1)
          }
          return { ...task, completed: !task.completed }
        }
        return task
      }),
    )
  }

  const completed = tasks.filter((task) => task.completed).length

  return (
    <Container>
      <form onSubmit={handleCreateNewComment}>
        <textarea
          placeholder="Add a new task"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          onKeyDown={(e) => handleKeyDown(e)}
          required={true}
        />
        <Button handleCreateNewComment={handleCreateNewComment} />
      </form>

      <Content>
        <h4>
          Created tasks
          <span>{tasks.length || 0}</span>
        </h4>
        <h4>
          Completed tasks
          <span>
            {completed} de {tasks.length}
          </span>
        </h4>
      </Content>

      <Main>
        {tasks.length ? (
          tasks.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleTaskCompleted={handleTaskCompleted}
                handleEditTask={handleEditTask}
                index={index}
              />
            )
          })
        ) : (
          <NoTasks>
            <Clipboard size={48} />
            <h3>Oopsie... You have no tasks yet! </h3>
            <span>Add a task for better organize your day.</span>
          </NoTasks>
        )}
      </Main>
    </Container>
  )
}
