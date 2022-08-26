import React from 'react';
import DialogText from './DialogText';
import DialogButtons from './DialogButtons';

export default class DialogBox extends React.Component {
  render () {
    return (
      <article className='dialog-box'>
        <DialogText />
        <DialogButtons />
      </article>
    );
  }
}
