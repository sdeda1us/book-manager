import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import AddSubject from '../AddSubject/AddSubject';
import AddBook from '../AddBook/AddBook';
import './App.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid>
      <Header />
      <Router>
        <nav>
              <Link to = '/'>Add Entry</Link>
              <Link to = '/subject'>Add Subject</Link>
        </nav>
          <Route exact path="/" component={AddBook}/>
          <Route path="/subject" component={AddSubject}/>
      </Router>
    
    </Grid>
  );
}

export default App;
