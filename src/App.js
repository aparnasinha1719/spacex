import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

import './App.css';
import History from './containers/History/History';
import Payload from './containers/Payload/Payload';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <Router>
    <div className="App">
    <Layout>
    <Switch>
      <Route path='/history' component={History} />
      <Route path='/payload' component={Payload} />
      <Redirect to='/history' />
    </Switch>
    </Layout>
    </div>
    </Router>
    
  );
}

export default App; 
