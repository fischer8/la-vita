import React from 'react';
import ZapButton from './Components/ZapButton';
import Header from './Components/Header';
import Main from './Components/Main';
import DialogBox from './Components/DialogBox';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import './App.css';
import logo_image from './images/elementos/lavita_logotipo branco.png';
import header_image from './images/elementos/lavita_barquinhos_semreboco.png';

class App extends React.Component {
  render() {
    return (
      <section>
        <ZapButton />
        <Header cover={header_image} logo={logo_image} />
        <Main />
        <DialogBox />
        <Footer logo={logo_image} />
        <Copyright />
      </section>
    );
  }
}

export default App;