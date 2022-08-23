import React from 'react';
import Suites from './Suites';

class Main extends React.Component {
  render() {
    return (
      <main>
        <h2 className='main-title'>Nossas Suítes</h2>
        <Suites />
      </main>
    );
  }
}

export default Main;