import { Component } from 'react';
import Nav from './Nav';

export default class FooterNav extends Component {
  render() {
    const opts = ['Home', 'Sobre','Suítes','Fotos'];
    return (
      <section className='footer-nav-container'>
        <h2 className='footer-nav-title'>Explore</h2>
        <Nav opts={opts} navclname='footer-nav' optclname='footer-nav-opts' />
      </section>
    );
  }
}
