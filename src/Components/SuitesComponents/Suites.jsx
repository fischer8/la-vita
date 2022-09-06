import { Component } from 'react';
import FloatButtons from '../MainComponents/FloatButtons';
import Footer from '../MainComponents/Footer';
import Header from '../MainComponents/Header';
import header_img from '../../images/photos/pousada/intern_10.jpg'

export default class Suites extends Component {
  render() {
    return(
      <section className='suites'>
        <FloatButtons />
        <Header cover={header_img} />
        <Footer />
      </section>
    );
  }
}