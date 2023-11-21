import Employee from '../Employee'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

const Team = ({employees, name, color, onChangeTeamColor, onDeleteEmployee}) => {
  return (
    employees.length > 0 &&
      <section
        className='team'
        style={{backgroundColor: hexToRgba(color, '0.6')}}
      >
        <div className="container">
          <h3>
            {name}
            <p style={{ backgroundColor: color }}></p>
          </h3>

          <input 
            type="color" 
            className='color-input' 
            value={color}
            onChange={(event) => onChangeTeamColor(name, event.target.value)}
          />

          <div className="team-employees">
            {employees.map(employee => {
              return (
                <Employee 
                  name={employee.name} 
                  job={employee.job} 
                  image={employee.image} 
                  key={employee.name}
                  headerColor={color}
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
