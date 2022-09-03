import { Component } from 'react';
import hamb_icon from '../../images/elementos/hamb_icon.webp'

export default class NavButton extends Component {
  render () {
    return (
      <button className='nav-button-oc' onClick={this.props.handleChange}>
        <img className='hamb-img' src={hamb_icon} alt='' />
      </button>
    );
  }
}
