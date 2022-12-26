import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';

const Navbar = () => {
    const [clicked, isClicked] = useState(false);

    return ( 
        <div className="navbar">
            <div className="nav-logo">Billy Ouattara</div>
            <div className={clicked? "show-nav-link-box" : "nav-link-box"}>
                <div className="nav-link"><a href="/">Home</a></div>
                <div className="nav-link"><a href="/Contact">Contact</a></div>
                <div className="nav-link"><a href="/About">About</a></div>
            </div>
            {
                !clicked? (
                    <div className='menu-icon' onClick={() => isClicked(true)}><RiMenu4Line /></div>
                ) : (
                    <div className='menu-icon' onClick={() => isClicked(false)}><RiCloseLine /></div>
                )
            }
        </div>
    );
}
 
export default Navbar;