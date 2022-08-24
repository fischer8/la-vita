import React from 'react';

class DialogButtons extends React.Component {
  render () {
    const zapZap = 'https://api.whatsapp.com/send?phone=5511994352770';
    const location = 'https://api.whatsapp.com/send?phone=5511994352770';
    return (
      <section className="dialog-buttons">
        <a className="contact-button" href={zapZap}>Contato</a>
        <a className="location-button" href={location}>Localização no Maps</a>
      </section>
    );
  }
}

export default DialogButtons;