import { Component } from 'react';
import FloatButtons from '../MainComponents/FloatButtons';
import Header from '../MainComponents/Header';
import header_img from '../../images/photos/pousada/intern_10.jpg'
import Footer from '../MainComponents/Footer';
import '../../styles/About.css'

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <FloatButtons />
        <Header cover={header_img} />
        <h2>Sobre</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rem molestiae culpa repellat iusto quos nisi delectus eaque qui provident illo exercitationem obcaecati quibusdam numquam dolor ullam magni unde explicabo reiciendis, excepturi doloribus a. Est!</p>
        <Footer/>
      </section>
    );
  }
}