import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainComponents/MainPage';
import About from './Components/AboutComponents/About';
import NotFound from './Components/NotFound/NotFound';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/home' component={MainPage} />
        <Route exact path='/sobre' component={About} />
        <Route path='*' component={NotFound}/>
      </Switch>
    );
  }
}
