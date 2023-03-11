import { useState } from 'react'
import { PencilSimple, Trash } from 'phosphor-react'
import { CheckButton, EditStyle, TaskContainer, TrashStyle } from './styles'

type TaskType = {
  task: string
}

interface TaskProps {
  task: TaskType
  index: number
  handleDeleteTask: (index: number) => void
  handleTaskCompleted: (index: number) => void
  handleEditTask: (index: number) => void
}

export function Task({
  task,
  index,
  handleDeleteTask,
  handleEditTask,
  handleTaskCompleted,
}: TaskProps) {
  const [completed, setCompleted] = useState(false)

  return (
    <TaskContainer>
      <CheckButton
        active={completed}
        onClick={() => {
          setCompleted(!completed)
          handleTaskCompleted(index)
        }}
      />
      <p>{task.task}</p>
      <div>
        <EditStyle onClick={() => handleEditTask(index)}>
          <PencilSimple size={20} weight="fill" />
        </EditStyle>
        <TrashStyle title="Delete task" onClick={() => handleDeleteTask(index)}>
          <Trash size={20} weight="fill" />
        </TrashStyle>
      </div>
    </TaskContainer>
  )
}
