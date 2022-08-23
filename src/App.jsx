import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Main />
      </section>
    );
  }
}

export default App;