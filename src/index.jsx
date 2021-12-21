
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App(){
  const initialState = [
    {id: crypto.randomUUID(), content: "산책", completed: false},
    {id: crypto.randomUUID(), content: "식사", completed: true},
  ];
  /*
  const todoListState = useState(initialState);
  const todoList = todolistState[0]; <-첫번째 원소 현재상태
  const setTodoList = todolistState[1]; <-두번째 원소 Setter 함수

  상태의 기본값을 initialState에 선언, useState에 인자로 넣고
  배열 비구조화 할당으로 각원소 추출
  */
  const [todoList, setTodoList] = useState(initialState);

  function addTodoItem(content){
    const newTodoItem = {id: crypto.randomUUID(), content: content, completed: false};
    // ... <- spread 연산자로 old를 받은 새로운 배열을 만들면서 newTodoItem 원소 추가
    setTodoList(old => [...old, newTodoItem]);
  }

  function deleteTodo(targetId){
      setTodoList(old => old.filter(todo => todo.id !== targetId))
  }

  function completeTodo(targetId){
    setTodoList(old => old.map(todo => todo.id === targetId ? {...todo, completed: !todo.completed} :todo))
  }

  return(
    <section className="todoapp">
      <div>
        <Header addTodoItem={addTodoItem} />
        <Main todoList={todoList} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        <Footer />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));