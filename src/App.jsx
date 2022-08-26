import React from 'react';
import FloatButtons from './Components/FloatButtons';
import Header from './Components/Header';
import Main from './Components/Main';
import DialogBox from './Components/DialogBox';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import logo_img from './images/elementos/lavita_logo.webp';
import header_img from './images/elementos/main_cover.webp';
import './App.css';

class App extends React.Component {
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

export default App;