import './Employee.css'

const Employee = ({ name, job, image }) => {
  return (
    <div className='employee'>
      <div class="employee-header">
        <img src={image} alt="Foto do coladorador" />
      </div>

      <div class="employee-footer">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  )
}

export default Employee
