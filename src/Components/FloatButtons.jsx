import React from 'react';
import ZapButton from './ZapButton';
import HandleNav from './HandleNav';

class FloatButtons extends React.Component {
  render() {
    return (
      <section>
        <ZapButton />
        <HandleNav />
      </section>
    );
  }
}

export default FloatButtons;