import { Component } from 'react';
import Suites from './Suites';

export default class Main extends Component {
  render() {
    return (
      <main>
        <h2 className='main-title'>Nossas Suítes</h2>
        <Suites />
      </main>
    );
  }
}
