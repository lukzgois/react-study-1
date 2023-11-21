import { IoCloseCircle } from "react-icons/io5";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import './Employee.css'

const Employee = ({ employee, headerColor, onDelete, onBookmark }) => {
  const bookmarkIconProps = {
    size: 24,
    onClick: () => onBookmark(employee.id)
  }
  return (
    <div className='employee'>
      <IoCloseCircle 
        size={32}
        className="delete"
        onClick={() => onDelete(employee.id) }
      />

      <div 
        className="employee-header"
        style={{ backgroundColor: headerColor }}
      >
        <img src={employee.image} alt="Foto do coladorador" />
      </div>

      <div className="employee-footer">
        <h4>{employee.name}</h4>
        <h5>{employee.job}</h5>
        <div className="employee-bookmark">
          { employee.bookmark
            ? <IoMdHeart {...bookmarkIconProps} color="red" />
            : <IoIosHeartEmpty {...bookmarkIconProps} />
          }
        </div>
      </div>
    </div>
  )
}

export default Employee
