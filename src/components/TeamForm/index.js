import TextField from '../TextField'
import Button from '../Button'
import { useState } from 'react'

const Form = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    onCreate({
      name,
      color
    })

    setName('')
    setColor('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Preencha os dados para criar um novo time.</h2>

      <TextField 
        required
        label="Nome"
        placeholder="Digite nome do time"
        value={name}
        onChange={setName}
      />

      <TextField
        required 
        label="Cor"
        placeholder="Digite a cor do time" 
        value={color}
        onChange={setColor}
      />

      <Button>
        Criar Time
      </Button>
    </form>
  )
}

export default Form;
