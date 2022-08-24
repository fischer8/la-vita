import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import DialogBox from './Components/DialogBox';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Main />
        <DialogBox />
      </section>
    );
  }
}

export default App;