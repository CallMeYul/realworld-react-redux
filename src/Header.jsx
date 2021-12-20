import React, {useState} from 'react';

export default function Header(){
  const [todoInput, setTodoInput] = useState('');

  function handleChange(e){
    console.log(e.target.value);
    setTodoInput(e.target.value)
  }

  function handleKeyUp(e){
    if(e.key === "Enter"){
      // setTodoList(old => [...old, {content: todoInput, completed: false}]);
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