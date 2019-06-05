import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark au-dark-blue">
      <a className="navbar-brand " href="#top">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item p-2 active">
            <a className="nav-link " href="#top">Home <span className="sr-only">(current)</span> <i className="fa fa-chevron-down fa-xs"></i></a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link " href="#link">Link <i className="fa fa-chevron-down fa-xs"></i></a>
          </li>
          <li className="nav-item p-2 dropdown">
            <a className="nav-link  dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown <i className="fa fa-chevron-down fa-xs"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#action">Action</a>
              <a className="dropdown-item" href="#another">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#item">Something else here</a>
            </div>
          </li>
          <li className="nav-item ml-auto p-2">
            <a className="nav-link" href="#disabled"><i className="fa fa-comments"></i> help & contact</a>
          </li>
          <li className="nav-item p-2">
              <a href="#search" className="nav-link"><i className="fa fa-search"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
