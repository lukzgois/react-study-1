import Employee from '../Employee'
import './Team.css'

const Team = ({employees, name, primaryColor, secondaryColor, onDeleteEmployee}) => {
  return (
    employees.length > 0 &&
      <section
        className='team'
        style={{backgroundColor: secondaryColor}}
      >
        <div class="container">
          <h3>
            {name}
            <p style={{ backgroundColor: primaryColor }}></p>
          </h3>

          <div className="team-employees">
            {employees.map(employee => {
              return (
                <Employee 
                  name={employee.name} 
                  job={employee.job} 
                  image={employee.image} 
                  key={employee.name}
                  headerColor={primaryColor}
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
