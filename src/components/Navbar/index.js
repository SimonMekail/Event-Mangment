import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md  bg-dark border-bottom border-secondary border-3 shadow-lg">
            <div className="container-xxl ">

                <Link className="navbar-brand" to='/'>
                    <i className="bi bi-calendar2-event mx-3 text-light"></i>
                    <span className="text-light fw-bold">
                        Event Mangment
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/login'>Login</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/signup'>SignUp</NavLink>
                        </li>
                        {/* <li>
            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/create'>Create Event</NavLink>
        </li> */}

                        {/* <li>
            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/delete'>Delete Event</NavLink>
        </li> */}

                        {/* <li>
            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/update'>Update Event</NavLink>
        </li> */}

                        {/* <li>
            <NavLink className='nav-link text-light mx-2 border  border-3 rounded-pill fw-light' to='/show'>Show Event</NavLink>
        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;