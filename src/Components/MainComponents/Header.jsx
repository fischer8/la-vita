import { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    const { logo, cover } = this.props  
    const opts = ['Home', 'Suítes', 'Fotos', 'Contato']
    return (
      <header>
        <Nav opts={opts} navclname='nav-container' optclname='nav-opts' />
        <img className='top-logo' src={ logo } alt='' />
        <img className='top-cover' src={ cover } alt='' />
      </header>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
