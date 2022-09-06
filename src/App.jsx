import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainComponents/MainPage';
import Photos from './Components/PhotosComponents/Photos';
import About from './Components/AboutComponents/About';
import NotFound from './Components/NotFound/NotFound';
import Suites from './Components/SuitesComponents/Suites';
import Contact from './Components/ContactComponents/Contact';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/home' component={MainPage} />
        <Route exact path='/fotos' component={Photos} />
        <Route exact path='/suites' component={Suites} />
        <Route exact path='/sobre' component={About} />
        <Route exact path='/contato' component={Contact} />        
        <Route path='*' component={NotFound}/>
      </Switch>
    );
  }
}
