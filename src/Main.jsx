import React from 'react';

function TodoItem({ id, content, completed, completeTodo, deleteTodo }){
  return(
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input  className="toggle" type="checkbox" checked={completed} onClick={e => { completeTodo(id) }}/>
        <label>{content}</label>
        <button className="destroy" onClick={(e) => {deleteTodo(id)}}></button>
      </div>
      <input className="edit" value={content} />
    </li>
  )
}

export default function Main({todoList, completeTodo, deleteTodo}){

  return (
   <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
      {/* 리액트에서 배열 렌더링 시 원소마다 고유한 값을 가진 key라는 props를 설정해야 함
      여기서는 index.jsx에서 crypto.randomUUID() 사용 */}
      {todoList.map(todo => <TodoItem {...todo} key={todo.id} completeTodo={completeTodo} deleteTodo={deleteTodo} />)}
      </ul>
    </section>
  )
}