import React, { Component } from 'react';
import './sass/global/Global.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from './components/headerComponent/header';
import FooterPage from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Homepage />
        <FooterPage/>
      </div>
    );
  }
}

export default App;
