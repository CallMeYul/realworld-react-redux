
import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App(){
  return(
    <section className="todoapp">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));