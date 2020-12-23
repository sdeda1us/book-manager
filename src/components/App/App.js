import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import ManageGenres from '../ManageGenres/ManageGenres';
import AddBook from '../AddBook/AddBook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
              <Link to = '/'>Add Entry</Link>
              <Link to = '/genres'>Manage Genres</Link>
        </nav>
          <Route exact path="/" component={AddBook}/>
          <Route path="/genres" component={ManageGenres}/>
      </Router>
      <p>Hi from app!</p>
    </div>
  );
}

export default App;
