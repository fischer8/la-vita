import React from 'react';

class SideNav extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.props.handleChange)
  }
  // componentWillUnmount(){
  //   document.removeEventListener("click", this.props.handleChange)
  // }
  render () {
    return (
      <nav className="side-nav">
        <span className="close-nav-button" onClick={this.props.handleChange}>X</span>
        <ul>
          <li className="side-nav-opts">Fotos</li><hr />
          <li className="side-nav-opts">Suites</li><hr />
          <li className="side-nav-opts">Contato</li>
        </ul>
      </nav>      
    );
  }
}

export default SideNav;