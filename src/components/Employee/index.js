import { IoCloseCircle } from "react-icons/io5";
import './Employee.css'

const Employee = ({ name, job, image, headerColor, onDelete }) => {
  return (
    <div className='employee'>
      <IoCloseCircle 
        size={32}
        className="delete"
        onClick={() => onDelete(name) }
      />

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
