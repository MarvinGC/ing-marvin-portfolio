import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-log">
                <p>Ing. Marvin G.C.</p>
            </div>
            <div className="navbar-menu">
                <p><a href="#home"     > home       </a></p>
                <p><a href="#portfolio"> portfolio  </a></p>
                <p><a href="#contact"  > contact    </a></p>
                {/*<p><a href="#about"    > about      </a></p>*/}
                {/*<p><a href="#settings" > settings   </a></p>*/}
            </div>
        </div>
    );
};

export default Navbar;