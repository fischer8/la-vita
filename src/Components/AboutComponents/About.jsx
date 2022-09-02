import { Component } from 'react';
import FloatButtons from '../MainComponents/FloatButtons';
import HeaderNav from '../MainComponents/HeaderNav'
import foto1 from '../../images/photos/pousada/intern_6.jpg'
import '../styles/About.css'

export default class About extends Component {
  render() {
    return (
      <section>
        <FloatButtons />
        <HeaderNav />
        <img className='about-top-cover' src={foto1} alt="" />
        <h2>Sobre</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rem molestiae culpa repellat iusto quos nisi delectus eaque qui provident illo exercitationem obcaecati quibusdam numquam dolor ullam magni unde explicabo reiciendis, excepturi doloribus a. Est!</p>

      </section>
    );
  }
}