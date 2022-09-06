import { Component } from 'react';
import Header from '../MainComponents/Header';
import FloatButtons from '../MainComponents/FloatButtons';
import Footer from '../MainComponents/Footer';
import header_img from '../../images/photos/pousada/intern_10.jpg'

export default class Photos extends Component {
  render() {
    return (
      <section className='photos'>
        <FloatButtons />
        <Header cover={header_img} />
        <Footer />
      </section>
    );
  }
}