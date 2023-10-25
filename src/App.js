import React from 'react';
import Header from './components/newsheader'
import Content from './components/newscontent'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
