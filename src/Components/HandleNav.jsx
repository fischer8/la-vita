import React from 'react';
import NavButton from './NavButton';
import SideNav from './SideNav';


class HandleNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    };
  }
  handleChange = () => {
    this.setState({visible: !this.state.visible})
  }
  render () {
    return (
      <section>
        {this.state.visible ? <SideNav handleChange={this.handleChange} /> : <NavButton handleChange={this.handleChange}/> }
      </section>
    );
  }
}

export default HandleNav;