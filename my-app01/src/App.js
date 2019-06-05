import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light au-dark-blue">
        <a className="navbar-brand" href="#top">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#top">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#action">Action</a>
                <a className="dropdown-item" href="#another">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#item">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white disabled" href="#disabled">Disabled</a>
            </li>
            <li>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <h1>This is a header</h1>
      </header>
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
