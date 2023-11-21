import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer';
import Form from './components/Form'
import Teams from './components/Teams';

function App() {
  const [teams, setTeams] = useState([
    { name: 'Programação', color: '#57C278' },
    { name: 'Front-End', color: '#82CFFA' },
    { name: 'Data Science', color: '#A6D157' },
    { name: 'DevOps', color: '#E06B69' },
    { name: 'UX e Design', color: '#DB6EBF' },
    { name: 'Mobile', color: '#FFBA05' },
    { name: 'Inovação e Gestão', color: '#FF8A29' },
  ])
  
  const initialEmployees = [
    { name: 'Lucas Gois', job: 'Programador', image: 'https://github.com/lukzgois.png', team: 'Programação' }
  ]

  const [employees, setEmployees] = useState(initialEmployees)

  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  const deleteEmployee = (employeeToDelete) => {
    const newArray = employees.filter((employee) => employee.name != employeeToDelete)
    setEmployees(newArray)
  }

  const changeTeamColor = (name, color) => {
    const updatedArray = teams.map((team) => {
      if (team.name === name) {
        team.color = color
      }

      return team
    })

    setTeams(updatedArray)
  }

  return (
    <div className="app">
      <Banner />

      <Form 
        onCreate={employee => addEmployee(employee)}
        teams={teams.map(team => team.name)}
      />

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
