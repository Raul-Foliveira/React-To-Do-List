import { useState } from 'react';

const form = ( {addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  
  //Responsável por cuidar do envio do formulário
  //chamando o atributo na tag FORM 
  const handleSubmit = (e) => {
    e.preventDefault();
    //Filtro para não passar campos nulos
    if (!value || !category)
      return;

    //Criação do to-do
    addTodo(value, category);
    
    //Limpar os campos
    setValue("");
    setCategory("");
  }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa?</h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Digite a tarefa' 
              value = {value}
              onChange={(e) => setValue(e.target.value)}
            />
            
            <select 
              value = {category} 
              onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Hobbie">Hobbie</option>
            </select>
            <button type='submit'>Criar</button>
        </form>
    </div>
  )
}

export default form