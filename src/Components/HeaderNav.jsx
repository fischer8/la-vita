import React from 'react';

class HeaderNav extends React.Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos','Contato'];
    const options = navOpts.map((opt) => <span className="nav-opts" key={opt} href={`#${opt}`}>{opt}</span>)
    return (
      <nav className="nav-container" >
          {options}
      </nav>
    );
  }
}

export default HeaderNav;