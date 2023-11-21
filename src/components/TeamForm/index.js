import TextField from '../TextField'
import ColorField from '../ColorField'
import Button from '../Button'
import { useState } from 'react'

const Form = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('#000000')

  const handleSubmit = (event) => {
    event.preventDefault()

    onCreate({
      name,
      color
    })

    setName('')
    setColor('#000000')
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

      <ColorField
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
