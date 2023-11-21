import './Teams.css'

import Team from '../Team'

const Teams = ({teams, employees, onDeleteEmployee, onChangeTeamColor}) => {
  return (
    <div className="teams">
      <h2>Minha Orgarnização</h2>

      {teams.map(team => {
        return (
          <Team 
            name={team.name}
            key={team.name} 
            color={team.color}
            employees={employees.filter(employee => employee.team == team.name)}
            onDeleteEmployee={onDeleteEmployee}
            onChangeTeamColor={onChangeTeamColor}
          />
        )
      })}
    </div>
  )
}

export default Teams;
