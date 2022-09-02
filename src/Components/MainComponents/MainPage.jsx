import { Component } from 'react';
import FloatButtons from './FloatButtons';
import Header from './Header';
import Main from './Main';
import DialogBox from './DialogBox';
import Footer from './Footer';
import Copyright from './Copyright'
import logo_img from '../../images/elementos/lavita_logo.webp';
import header_img from '../../images/elementos/main_cover.webp';
import '../styles/MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <section>
        <FloatButtons />
        <Header cover={header_img} logo={logo_img} />
        <Main />
        <DialogBox />
        <Footer logo={logo_img} />
        <Copyright />
      </section>
    );
  }
}
