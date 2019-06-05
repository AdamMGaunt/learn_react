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
        <section className="m-auto">
          <div className="icon-banner p-3">
            <div className="icons d-flex justify-content-around">
              <i className="fa fa-camera fa-3x p-3"></i>
              <i className="fa fa-camera fa-3x p-3"></i>
              <i className="fa fa-camera fa-3x p-3"></i>
              <i className="fa fa-camera fa-3x p-3"></i>
            </div>
          </div>
        </section>
      </main>
      <footer>
      <p>This is the footer text</p>
      </footer>
    </div>
  );
}

export default App;
