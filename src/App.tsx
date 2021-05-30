import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';
import TopInfoBar from './components/TopInfoBar';
import About from './components/About';
import NavBar from './components/NavBar';

import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './components/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <div className='App'>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/news' component={TopInfoBar} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
