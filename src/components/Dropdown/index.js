import './Dropdown.css'

const Dropdown = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
      <label className="dropdown">
        <span>{props.label}</span>

        <select required={props.required} value={props.value} onChange={handleChange}>
          <option></option>
          {props.items.map(item => <option key={item}>{item}</option>)}
        </select>
      </label>
  )
}

export default Dropdown
