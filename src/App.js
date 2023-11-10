import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Form from './components/Form'

function App() {
  const [employees, setEmployees] = useState([])

  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />

      <Form onCreate={employee => addEmployee(employee)}/>

    </div>
  );
}

export default App;
