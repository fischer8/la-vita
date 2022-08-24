import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    const { logo } = this.props;
    return (
      <footer className="footer">
        <img className="footer-logo" src={logo} alt="" />
        <section className="footer-container">
          <h5 className="footer-address">São Miguel dos Milagres - AL - Brasil.</h5>
          <span className="footer-button">Faça sua reserva</span>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired
}

export default Footer;