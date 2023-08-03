import { useState } from 'react';
import './App.css';

function App() {
  const [formulario, setFormulario] = useState({name:''})
  const handleChange=(e)=>{
    setFormulario({
    ...formulario,
    [e.target.name]:e.target.value
    })
  }
  console.log(formulario.name)
  return (
    <form>
      <input name="name"
      placeholder='Salomé'
      value={formulario.name}
      onChange={handleChange}
      />
      <p>Es:{formulario.name}</p>
    </form>
  );
}

export default App;
