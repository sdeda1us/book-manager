import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import AddSubject from '../AddSubject/AddSubject';
import AddBook from '../AddBook/AddBook';
import './App.css';
import styled from 'styled-components';

//-------------------------------STYLED COMPONENTS-------------------------------//
const PageSpace = styled.div`
  padding: 10px;
  width: auto;
`
const NavBar = styled.nav`
  background-color: rgb(153, 112, 51);
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
`

const LinkText = styled.a`
  color: white;
  padding: 10px;
`



function App() {
  return (
    <PageSpace>
      <Header />
      <Router>
        <NavBar>
              <Link to = '/'><LinkText>Add Entry</LinkText></Link>
              <Link to = '/subject'><LinkText>Add Subject</LinkText></Link>
        </NavBar>
          <Route exact path="/" component={AddBook}/>
          <Route path="/subject" component={AddSubject}/>
      </Router>
    
    </PageSpace>
  );
}

export default App;
