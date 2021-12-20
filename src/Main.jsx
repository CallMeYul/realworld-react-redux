import React, {useState} from 'react';

function TodoItem({content, completed}){
  return(
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input read type="checkbox" checked={completed} className="toggle" />
        <label>{content}</label>
        <button className="desrtoy"></button>
      </div>
      <input className="edit" value={content} />
    </li>
  )
}

export default function Main({todoList}){

  return (
   <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todoList.map(todo => <TodoItem {...todo} />)}
      </ul>
    </section>
  )
}