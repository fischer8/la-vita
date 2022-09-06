import { Component } from 'react';
import SuitesGrid from './SuitesGrid';

export default class Main extends Component {
  render() {
    return (
      <main>
        <h2 className='main-title'>Nossas Suítes</h2>
        <SuitesGrid/>
      </main>
    );
  }
}
