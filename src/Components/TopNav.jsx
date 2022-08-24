import React from 'react';

class TopNav extends React.Component {
  render() {
    const navOpts = ['Home','Suítes','Fotos','Contato'];
    const options = navOpts.map((opt) => <span className="nav-opts">{opt}</span>)
    return (
      <nav className="nav-container" >
          {options}
      </nav>
    );
  }
}

export default TopNav;