import { Component } from 'react';
import FooterArticle from './FooterArticle';
import FooterNav from './FooterNav';
import Copyright from './Copyright';
import logo_img from '../../images/elementos/lavita_logo.webp';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <article className='footer'>
          <img className='footer-logo' src={logo_img} alt='' />
          <FooterArticle />
          <FooterNav />
        </article>
          <Copyright />
      </footer>
    );
  }
}
