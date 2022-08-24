import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    const { logo } = this.props;
    return (
      <footer className="footer">
        <img className="footer-logo" src={logo} alt="" />
      </footer>
    );
  }
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired
}

export default Footer;