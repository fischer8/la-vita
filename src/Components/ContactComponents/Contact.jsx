import { Component } from 'react';
import FloatButtons from "../MainComponents/FloatButtons";
import Header from "../MainComponents/Header";
import Footer from "../MainComponents/Footer";
import header_img from '../../images/elementos/main_cover.webp';

export default class Contact extends Component {
  render() {
    return(
      <section className='contact'>
        <FloatButtons/>
        <Header cover={header_img}/>
        <Footer/>
      </section>
    );
  }
}