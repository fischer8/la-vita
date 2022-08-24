import React from 'react';

class FooterNav extends React.Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos'];
    const options = navOpts.map((opt) => <span className="footer-nav-opts">{opt}</span>)
    return (
      <section className="footer-nav-container">
        <h2>Menu</h2>
        <nav className="footer-nav">
          {options}
        </nav>
      </section>
    );
  }
}

export default FooterNav;