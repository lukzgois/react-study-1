import './Employee.css'

const Employee = ({ name, job, image, headerColor }) => {
  return (
    <div className='employee'>
      <div 
        className="employee-header"
        style={{ backgroundColor: headerColor }}
      >
        <img src={image} alt="Foto do coladorador" />
      </div>

      <div className="employee-footer">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  )
}

export default Employee
