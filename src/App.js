import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer';
import EmployeeForm from './components/EmployeeForm'
import TeamForm from './components/TeamForm'
import Teams from './components/Teams';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    { id: uuidv4(), name: 'Programação', color: '#57C278' },
    { id: uuidv4(), name: 'Front-End', color: '#82CFFA' },
    { id: uuidv4(), name: 'Data Science', color: '#A6D157' },
    { id: uuidv4(), name: 'DevOps', color: '#E06B69' },
    { id: uuidv4(), name: 'UX e Design', color: '#DB6EBF' },
    { id: uuidv4(), name: 'Mobile', color: '#FFBA05' },
    { id: uuidv4(), name: 'Inovação e Gestão', color: '#FF8A29' },
  ])
  
  const initialEmployees = [
    { 
      id: uuidv4(),
      name: 'Lucas Gois',
      job: 'Programador',
      image: 'https://github.com/lukzgois.png',
      team: 'Programação',
    }
  ]

  const [employees, setEmployees] = useState(initialEmployees)

  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  const deleteEmployee = (id) => {
    const newArray = employees.filter((employee) => employee.id != id)
    setEmployees(newArray)
  }

  const addTeam = (team) => {
    const newTeam = {id: uuidv4(), ...team}
    setTeams([...teams, newTeam])
  }

  const changeTeamColor = (id, color) => {
    const updatedArray = teams.map((team) => {
      if (team.id === id) {
        team.color = color
      }

      return team
    })

    setTeams(updatedArray)
  }

  return (
    <div className="app">
      <Banner />

      <section className="forms-container">
        <EmployeeForm 
          onCreate={employee => addEmployee(employee)}
          teams={teams.map(team => team.name)}
        />

        <TeamForm 
          onCreate={addTeam}
        />
      </section>

      <Teams 
        teams={teams} 
        employees={employees} 
        onDeleteEmployee={deleteEmployee}
        onChangeTeamColor={changeTeamColor}
      />

      <Footer />
    </div>
  );
}

export default App;
