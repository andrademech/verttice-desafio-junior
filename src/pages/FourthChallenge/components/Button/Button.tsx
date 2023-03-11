import { PlusCircle } from 'phosphor-react'
import React, { FormEvent } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps {
  handleCreateNewComment: (e: FormEvent) => void
}

export function Button({ handleCreateNewComment }: ButtonProps) {
  return (
    <ButtonStyled onClick={handleCreateNewComment}>
      <span>Add</span>
      <PlusCircle size={20} />
    </ButtonStyled>
  )
}
