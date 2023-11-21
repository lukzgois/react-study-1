import './Teams.css'

import Team from '../Team'

const Teams = ({teams, employees, onDeleteEmployee}) => {
  return (
    <div className="teams">
      <h2>Minha Orgarnização</h2>

      {teams.map(team => {
        return (
          <Team 
            name={team.name}
            key={team.name} 
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            employees={employees.filter(employee => employee.team == team.name)}
            onDeleteEmployee={onDeleteEmployee}
          />
        )
      })}
    </div>
  )
}

export default Teams;
