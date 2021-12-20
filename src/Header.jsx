import React, {useState} from 'react';

export default function Header({addTodoItem}){
  const [todoInput, setTodoInput] = useState('');

  function handleChange(e){
    setTodoInput(e.target.value)
  }

  function handleKeyUp(e){
    if(e.key === "Enter"){
      addTodoItem(todoInput);
      setTodoInput('');
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?"
        value={todoInput}
        onChange={handleChange} 
        onKeyUp={handleKeyUp} />
    </header>
  )
}