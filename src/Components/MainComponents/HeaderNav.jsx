import { Component } from 'react';

export default class HeaderNav extends Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos','Contato'];
    const options = navOpts.map((opt) => <span className='nav-opts' key={opt}>{opt}</span>)
    return (
      <nav className='nav-container' >
          {options}
      </nav>
    );
  }
}
