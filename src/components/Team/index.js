import Employee from '../Employee'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

const Team = ({employees, team, onChangeTeamColor, onDeleteEmployee}) => {
  return (
    employees.length > 0 &&
      <section
        className='team'
        style={{backgroundColor: hexToRgba(team.color, '0.6')}}
      >
        <div className="container">
          <h3>
            {team.name}
            <p style={{ backgroundColor: team.color }}></p>
          </h3>

          <input 
            type="color" 
            className='color-input' 
            value={team.color}
            onChange={(event) => onChangeTeamColor(team.id, event.target.value)}
          />

          <div className="team-employees">
            {employees.map(employee => {
              return (
                <Employee 
                  employee={employee}
                  key={employee.id}
                  headerColor={team.color}
                  onDelete={onDeleteEmployee}
                />
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Team
