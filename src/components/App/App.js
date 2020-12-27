import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import AddSubject from '../AddSubject/AddSubject';
import AddBook from '../AddBook/AddBook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
              <Link to = '/'>Add Entry</Link>
              <Link to = '/subject'>Add Subject</Link>
        </nav>
          <Route exact path="/" component={AddBook}/>
          <Route path="/subject" component={AddSubject}/>
      </Router>
    </div>
  );
}

export default App;
