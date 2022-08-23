import React from 'react';
import logo from '../images/elementos/lavita_logotipo branco.png';
import cover from '../images/elementos/lavita_barquinhos_semreboco.png';
import TopNav from './TopNav';

class Header extends React.Component {
  render() {
    return (
      <header>
        <TopNav />
        <img className='top-logo' src={ logo } alt="" />
        <img className='top-cover' src={ cover } alt="" />
      </header>
    );
  }
}

export default Header;