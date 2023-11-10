import './TextField.css'

const TextField = (props)  => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <label className="text-field">
      <span>{props.label}</span>

      <input 
        required={props.required}
        placeholder={props.placeholder} 
        value={props.value}
        onChange={handleChange}
      />
    </label>
  )
}

export default TextField
