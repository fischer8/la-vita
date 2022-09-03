import { Component } from 'react';
import { string } from 'prop-types';
import FooterArticle from './FooterArticle';
import FooterNav from './FooterNav';

export default class Footer extends Component {
  render() {
    const { logo } = this.props;
    return (
      <footer className='footer'>
        <img className='footer-logo' src={logo} alt='' />
        <FooterArticle />
        <FooterNav />
      </footer>
    );
  }
}

Footer.propTypes = {
  logo: string.isRequired
}
