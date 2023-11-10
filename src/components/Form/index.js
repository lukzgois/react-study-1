import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
  ]

  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onCreate({
      name,
      job,
      image,
      team
    })
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

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
          items={times} 
          value={team}
          onChange={setTeam}
        />

        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form;
