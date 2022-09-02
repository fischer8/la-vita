import { Component } from 'react';
import HeaderNav from './HeaderNav';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { logo, cover } = this.props  
    return (
      <header>
        <HeaderNav />
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
