
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";



class SignedInNavbar extends Component {
    constructor(props) {
        super(props)
         this.state = {
           
        }
    }

 tokeen = JSON.parse(localStorage.getItem("userData"))
        config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`
        }
    }

handleLogout = e => {
      e.preventDefault();
        axios.get(
           'http://127.0.0.1:8000/api/auth/logout',
            this.config
        ).then( response => {
            if (response.status === 200){
                // console.log(response)
                localStorage.clear()
                this.props.props.history.push("/")
                // <Redirect to='/'/>
            }
            else{
                console.log(response.data.message);
            }
        }

        )
        .catch(function (error) {
                console.log(error);
            });
        e.preventDefault();

} 

    render(){
        // console.log(this.props)
        return(
            <nav className="navbar navbar-expand-md bg-dark  border-bottom border-secondary border-3 shadow-lg">
    <div className="container-xxl ">

    <Link className="navbar-brand" to='/'>
                <i className="bi bi-calendar2-event mx-3 text-light"></i>
        <span className="text-light fw-bold">
        Event Mangment
        </span>
    </Link>
        <span className='text-light display-6 px-5'>
            <i className="bi bi-person-circle"></i>
            <Link className="text-light fw-light btn btn-outline-dark " to='/profile'> My Account</Link>
        </span>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link text-light mx-2 border  border-3 rounded-pill fw-light" to='/create'>Create Event</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-light mx-2 border  border-3 rounded-pill fw-light" to='/weather'>Get Weather</NavLink>
        </li>
        <li className="nav-item">
        {/* <NavLink className="nav-link text-light mx-2 border  border-3 rounded-pill fw-light"> */}
            <button type='submit' onClick={this.handleLogout} className='nav-link text-light mx-2 border  border-3 rounded-pill bg-dark fw-light'>Logout</button>
            
            {/* </NavLink> */}
        </li>
        </ul>
    </div>
    </div>
</nav>
        )

    }
}

export default SignedInNavbar;