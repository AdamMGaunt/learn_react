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
                <div className="col-sm-12 col-md-6">
                  <div className="my-dark-grey p-3 text-center text-white">
                    <p className="lead">After our two weeks together, you will have</p>
                  </div>
                  <div className="au-white">
                    <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
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

        <section className="m-auto my-dark-grey text-white">

          <div className="container container-dark">
            <div className="icons d-flex justify-content-around mt-0">
              <i className="fa fa-camera fa-3x p-3 light-icon"></i>
            </div>
            <div className="d-flex justify-content-center text-center p-3">
              <h1>Course Outline and Timeline</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 text-center">
                  <div className="circle-border m-auto">
                    <div className="circle">
                      <h4 className="m-auto">Week</h4>
                      <h1>1</h1>
                    </div>
                  </div>
                  <div className="column-line-vertical"></div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="">
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 text-center">
                  <div className="circle-border m-auto">
                    <div className="circle">
                      <h4 className="m-auto">Week</h4>
                      <h1>2</h1>
                    </div>
                  </div>
                  <div className="column-line-vertical"></div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="">
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 text-center">
                  <div className="circle-border m-auto">
                    <div className="circle">
                      <h4 className="m-auto">Week</h4>
                      <h1>3</h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="">
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="m-auto">
          <div className="container">
            <div className="callout-box no-arrow m-auto">
              <div className="callout-box-content p-3">
                <h2 className="text-center">Successful Course Completion</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto">
          <div className="container">
            <div className="icons d-flex justify-content-around mt-0">
              <i className="fa fa-camera fa-3x p-3"></i>
            </div>
            <div className="d-flex justify-content-center text-center p-3">
              <h1>Meet "Experts" & the Team</h1>
            </div>
            <div className="row text-center">
              <div className="col">
                <div className="circle">
                  <i className="fa fa-user fa-5x text-white"></i>
                </div>
                  <h4>Name</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              <div className="col">
                <div className="circle">
                  <i className="fa fa-user fa-5x text-white"></i>
                </div>
                <h4>Name</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col">
                <div className="circle">
                  <i className="fa fa-user fa-5x text-white"></i>
                </div>
                <h4>Name</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto my-form p-3">
          <div className="container">
            <div className="trans-bg p-3 m-auto">
              <div className="icons d-flex justify-content-around mt-0">
                <i className="fa fa-camera fa-3x p-3"></i>
              </div>
              <div className="d-flex justify-content-center text-center p-3">
                <div>
                  <h1 className="mb-0">Start your AU Journey...</h1>
                  <p>We have information to share with you.</p>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="*your first name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="*your last name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="*your email address" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-left">
                  <div className="form-group">
                    <p className="input-group-text"><span class="req-asterisk" aria-hidden="true">* </span>I am interested in</p>
                    <div class="form-group">
                      <div className="input-group">
                        <div className="input-group-text form-control ">
                          <input id="radio1" name="radio1" value="" type="radio" />
                          <p className="p-3 mt-1">Option 1</p>
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-group-text form-control ">
                          <input id="radio1" name="radio1" value="" type="radio" />
                          <p className="p-3 mt-1">Option 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </form>
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
