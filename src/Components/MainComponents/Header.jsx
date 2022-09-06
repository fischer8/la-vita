import { Component } from 'react';
import Nav from './Nav';
import logo_img from '../../images/elementos/lavita_logo.webp';

export default class Header extends Component {
  render() {
    const { cover } = this.props  
    const opts = ['Home','Fotos','Suítes','Sobre','Contato']
    return (
      <header>
        <Nav opts={opts} navclname='nav-container' optclname='nav-opts'/>
        <img className='top-logo' src={ logo_img } alt='' />
        <img className='top-cover' src={ cover } alt='' />
      </header>
    );
  }
}
