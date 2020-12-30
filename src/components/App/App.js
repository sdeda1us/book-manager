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
  margin-top: 5px;
  border-radius: 5px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#bc6725+1,c1701f+32,bf7a35+80,d69722+100&1+0,0.73+100 */
  background: -moz-linear-gradient(top, rgba(188,103,37,1) 0%, rgba(188,103,37,1) 1%, rgba(193,112,31,0.92) 32%, rgba(191,122,53,0.79) 80%, rgba(214,151,34,0.73) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(188,103,37,1) 0%,rgba(188,103,37,1) 1%,rgba(193,112,31,0.92) 32%,rgba(191,122,53,0.79) 80%,rgba(214,151,34,0.73) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(188,103,37,1) 0%,rgba(188,103,37,1) 1%,rgba(193,112,31,0.92) 32%,rgba(191,122,53,0.79) 80%,rgba(214,151,34,0.73) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc6725', endColorstr='#bad69722',GradientType=0 ); /* IE6-9 */
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
