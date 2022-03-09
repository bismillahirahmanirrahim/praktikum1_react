import React from 'react'; //import react
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className='title'>
          Project pertama react
        </h3>
        <p className='subtitle'>
          Belajar react itu mudah bukan?
          BUKAN!!!
        </p>
      </header>
    </div>
  );
}
}

export default App;