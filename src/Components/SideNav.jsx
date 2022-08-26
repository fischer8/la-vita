import React from 'react';

class SideNav extends React.Component {
  // componentDidMount() {
    // document.addEventListener("click", this.props.handleChange)
  // }
  // componentWillUnmount(){
  //   document.removeEventListener("click", this.props.handleChange)
  // }
  render () {
      const opts = ['Home','Sobre','Fotos','Suítes','Contato']
      const navOpts = opts.map((opt) => <li className="side-nav-opts">{opt}</li>)
    return (
      <nav className="side-nav">
        <span className="close-nav-button" onClick={this.props.handleChange}>x</span>
        <ul>
          {navOpts}
        </ul>
      </nav>      
    );
    
  }
}

export default SideNav;