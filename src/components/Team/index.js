import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
  return (
    props.employees.length > 0 &&
      <section
        className='team'
        style={{backgroundColor: props.secondaryColor}}
      >
        <h3
          style={{borderColor: props.primaryColor}}
        >{props.name}</h3>

        <div class="team-employees">
          {props.employees.map(employee => {
            return (
              <Employee name={employee.name} job={employee.job} image={employee.image} />
            )
          })}
        </div>
      </section>
  )
}

export default Team
