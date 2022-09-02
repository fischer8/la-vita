import { Component } from 'react';
import ZapButton from './ZapButton';
import HandleNav from './HandleNav';

export default class FloatButtons extends Component {
  render() {
    return (
      <section>
        <ZapButton />
        <HandleNav />
      </section>
    );
  }
}
