import React from 'react';

function Navbar() {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4">
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          <img
            style={{ width: '3rem' }}
            src="https://iconape.com/wp-content/files/nr/370725/svg/codepen-icon-logo-icon-png-svg.png"
            alt="CodePen Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
