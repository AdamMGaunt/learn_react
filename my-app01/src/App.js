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
        <div className="container">
          <div className="icon-banner">
            <div className="icons d-flex justify-content-around">
              <i className="fa fa-camera fa-3x p-3"></i>
              <i className="fa fa-envelope fa-3x p-3"></i>
              <i className="fa fa-signal fa-3x p-3"></i>
              <i className="fa fa-wrench fa-3x p-3"></i>
            </div>
          </div>
          </div>
        </section>

        <section className="m-auto">
        <div className="container">
          <div className="icons d-flex justify-content-around p-3">
            <i className="fa fa-camera fa-3x p-3"></i>
          </div>
          <div className="d-flex justify-content-center text-center p-3">
            <h1>Welcome to the Coach Approach for Leadership Development</h1>
          </div>
          <div className="container">
            <div className="row text-left">
              <div className="col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="m-auto au-light-grey">
          <div className="container">
            <div className="icons d-flex justify-content-around p-3">
              <i className="fa fa-camera fa-3x p-3"></i>
            </div>
            <div className="d-flex justify-content-center text-center p-3">
              <h1>Welcome to the Coach Approach for Leadership Development</h1>
            </div>
            <div className="container">
            <div className="row text-left">
              <div className="col">
                <p className="w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              </div>
            </div>

            <div className="container">
              <div className="row text-left">
                <div className="col-sm m-3">
                  <div className="my-dark-grey p-3 text-center text-white">
                    <p className="lead">After our two weeks together, you will have</p>
                  </div>
                  <div className="au-white">
                    <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div className="col-sm m-3">
                  <div className="my-dark-grey p-3 text-center text-white">
                    <p className="lead">After our two weeks together, you will have</p>
                  </div>
                  <div className="au-white">
                    <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto my-dark-grey">
          <div className="container container-dark">
            <div className="icons d-flex justify-content-around mt-0">
              <i className="fa fa-camera fa-3x p-3 light-icon"></i>
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
