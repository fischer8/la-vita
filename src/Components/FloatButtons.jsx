import React from 'react';
import ZapButton from './ZapButton';
import NavButton from './NavButton';

class FloatButtons extends React.Component {
  render() {
    return (
      <section>
        <ZapButton />
        <NavButton />
      </section>
    );
  }
}

export default FloatButtons;