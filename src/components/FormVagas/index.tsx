import React, { useState } from 'react'
import { FormVagasContainer, Campo, BotaoPesquisar } from './FormVagas.module'

interface FormVagasProps {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<FormVagasProps> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo)
  }

  return (
    <FormVagasContainer onSubmit={handleSubmit}>
      <Campo
        type="text"
        value={termo}
        onChange={handleChange}
        placeholder="Pesquisar vaga"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </FormVagasContainer>
  )
}

export default FormVagas
