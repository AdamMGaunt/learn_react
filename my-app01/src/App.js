import React from 'react';
import Header from './componets/header';
import Nav from './componets/nav';

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
      <p>This is the body text</p>
      <footer>
      <p>This is the footer text</p>
      </footer>
      </main>
    </div>
  );
}

export default App;
