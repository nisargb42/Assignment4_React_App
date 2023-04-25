import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './Style.css';


function App() {
  return (
    <div>
      <Header />
      <div className="main-nav-container">
        <div className="main-container">
          <Main />
        </div>
        <div className="nav-container">
          <Nav />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
