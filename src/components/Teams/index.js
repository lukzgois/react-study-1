import './Teams.css'

import Team from '../Team'

const Teams = ({teams, employees, onDeleteEmployee, onChangeTeamColor, onBookmarkEmployee}) => {
  return (
    <div className="teams">
      <h2>Minha Orgarnização</h2>

      {teams.map(team => {
        return (
          <Team 
            team={team}
            key={team.id}
            employees={employees.filter(employee => employee.team == team.name)}
            onDeleteEmployee={onDeleteEmployee}
            onChangeTeamColor={onChangeTeamColor}
            onBookmarkEmployee={onBookmarkEmployee}
          />
        )
      })}
    </div>
  )
}

export default Teams;
