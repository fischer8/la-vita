import { Component } from 'react';
import Nav from './Nav';

export default class SideNav extends Component {
  render () {
      const opts = ['Home','Sobre','Fotos','Suítes','Contato']
    return (
      <section>
        <span className='close-nav-button' onClick={this.props.handleChange}>x</span>
        <Nav opts={opts} navclname='side-nav' optclname='side-nav-opts' />
      </section>
    );
  }
}
