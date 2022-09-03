import { Component } from 'react';
import NavButton from './NavButton';
import SideNav from './SideNav';

export default class HandleNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    };
  }
  handleChange = () => {
    this.setState((oldState) => ({visible: !oldState.visible}))
  }
  render () {
    return (
      <section>
        {this.state.visible ? <SideNav handleChange={this.handleChange} /> : <NavButton handleChange={this.handleChange}/> }
      </section>
    );
  }
}
