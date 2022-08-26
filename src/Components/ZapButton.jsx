import React from 'react';
import zap_image from '../images/elementos/zap_icon.webp'

class ZapButton extends React.Component {
  render () {
    const zapZap = 'https://api.whatsapp.com/send?phone=5511994352770';
    return (
      <a href={zapZap} rel="noreferrer" target="_blank">
        <img className="zap-button" src={zap_image} alt="" />
      </a>
    );
  }
}

export default ZapButton;