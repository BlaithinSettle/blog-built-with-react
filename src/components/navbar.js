import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature } from '@fortawesome/free-solid-svg-icons'

library.add(faSignature)

const Navbar = () =>{
    return(
        <nav className="nav-wrapper pink darken-3">
            <div className="container">
                <a className="brand-logo left">My Blog &nbsp;<FontAwesomeIcon icon="signature" /></a>
                    <ul className="right">
                        <li><Link to="/">home</Link></li>
                        <li><NavLink to="/about">about me</NavLink></li>
                        <li><NavLink to="/contact">get in touch</NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar 