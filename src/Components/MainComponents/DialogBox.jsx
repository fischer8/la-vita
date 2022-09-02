import { Component } from 'react';
import DialogText from './DialogText';
import DialogButtons from './DialogButtons';

export default class DialogBox extends Component {
  render () {
    return (
      <article className='dialog-box'>
        <DialogText />
        <DialogButtons />
      </article>
    );
  }
}
