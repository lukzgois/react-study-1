import './ColorField.css'

const ColorField = (props)  => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <label className="color-field">
      <span>{props.label}</span>

      <input 
        type="color"
        required={props.required}
        placeholder={props.placeholder} 
        value={props.value}
        onChange={handleChange}
      />
    </label>
  )
}

export default ColorField
