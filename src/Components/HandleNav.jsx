import React from 'react';
import NavButton from './NavButton';
import SideNav from './SideNav';


class HandleNav extends React.Component {
  state = {
    visible: false
  };
  handleChange = () => {
    this.setState({visible: !this.state.visible})
  }
  render () {
    return (
      <section>
        {this.state.visible ? <SideNav /> : <NavButton handleChange={this.handleChange} /> }
      </section>
    );
  }
}

export default HandleNav;