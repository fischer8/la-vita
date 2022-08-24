import React from 'react';

class FooterArticle extends React.Component {
  render () {
    const zapZap = 'https://api.whatsapp.com/send?phone=5511994352770';
    return (
      <article className="footer-article-container">
          <h5 className="footer-address">São Miguel dos Milagres - AL - Brasil.</h5>
          <a href={zapZap} rel="noreferrer" target="_blank">
            <span className="footer-button">Faça sua reserva</span>
          </a>
      </article>
    );
  }
}

export default FooterArticle;