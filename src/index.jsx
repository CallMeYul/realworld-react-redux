
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App(){
  const initialState = [
    {content: "휴식", completed: false},
    {content: "식사", completed: true},
  ];
  const [todoList, setTodoList] = useState(initialState);

  function addTodoItem(content){
    setTodoList(old => [...old, {content: content, completed: false}]);
  }

  return(
    <section className="todoapp">
      <div>
        <Header addTodoItem={addTodoItem} />
        <Main todoList={todoList} />
        <Footer />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));