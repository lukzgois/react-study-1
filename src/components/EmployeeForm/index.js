import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onCreate({
      id: uuidv4(),
      name,
      job,
      image,
      team
    })

    setName('')
    setJob('')
    setImage('')
    setTeam('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>

      <TextField 
        required={true}
        label="Nome"
        placeholder="Digite o seu nome"
        value={name}
        onChange={setName}
      />

      <TextField
        required={true} 
        label="Cargo"
        placeholder="Digite o seu cargo" 
        value={job}
        onChange={setJob}
      />

      <TextField 
        required={true} 
        label="Imagem"
        placeholder="Digite o endereço da imagem" 
        value={image}
        onChange={setImage}
      />

      <Dropdown 
        required={true} 
        label="Time" 
        items={props.teams} 
        value={team}
        onChange={setTeam}
      />

      <Button>
        Criar Card
      </Button>
    </form>
  )
}

export default Form;
