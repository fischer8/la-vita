import React from 'react';
import DialogText from './DialogText';
import DialogButtons from './DialogButtons';

class DialogBox extends React.Component {
  render () {
    return (
      <article className="dialog-box" id="Contato">
        <DialogText />
        <DialogButtons />
      </article>
    );
  }
}

export default DialogBox;