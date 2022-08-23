import React from 'react';

class TopNav extends React.Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos','Contato'];
    const options = navOpts.map((opt) => <span className="menu-opts">{opt}</span>)
    return (
      <nav className="navContainer" id="nav" >
          {options}
      </nav>
    );
  }
}

export default TopNav;