import React from 'react';

function TodoItem(){
  return(
    <li className="complted">
      <div className="view">
        <input type="checkbox" checked={false} className="toggle" />
        <label>전화하기</label>
        <button className="desrtoy"></button>
      </div>
      <input className="edit" value="전화하기" />
    </li>
  )
}

export default function Main(){
  return (
   <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  )
}