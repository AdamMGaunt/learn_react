import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <div className="img-center feature-img">
        <img src="http://via.placeholder.com/1920x1080-?text=Picture+with+caption" className="img-fluid" alt="Placeholder Banner" />
        <div className="d-none d-md-block text-left p-3">
          <h3 className="pl-3"><strong>getty</strong>images</h3>
          <p className="pl-3">Rawpixel</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
