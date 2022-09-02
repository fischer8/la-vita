import { Component } from 'react';

export default class FooterNav extends Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos'];
    const options = navOpts.map((opt) => <span className='footer-nav-opts' key={opt}>{opt}</span>)
    return (
      <section className='footer-nav-container'>
        <h2 className='footer-nav-title'>Explore</h2>
        <nav className='footer-nav'>
          {options}
        </nav>
      </section>
    );
  }
}
