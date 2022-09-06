import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  convert = (string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  render() {
    const { opts, navclname, optclname } = this.props;
    const navOpts = opts.map((opt) => <Link to={`/${this.convert(opt)}`} key={opt}><li className={optclname}>{opt}</li></Link>)
    return (
      <nav className={navclname}>
        <ul>
          {navOpts}
        </ul>
      </nav>      
    );
  }
}
