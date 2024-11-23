import React, { Component } from 'react';
import axios from "axios";
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            gender: '',
            phone: '',
            photo:'',
            events:[]
        }
    }
    tokeen = JSON.parse(localStorage.getItem("userData"))
    config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`
        }
    }

    componentDidMount() {
        // const id = response.data.user.id
        axios.get(
            "http://127.0.0.1:8000/api/profile/my-events",
            this.config
        ).then (response => {
            if(response.status===200){
                console.log(response)
                this.setState({
                    events:response.data.Events
                })
            }
        })


        axios.get(
            "http://127.0.0.1:8000/api/profile/show",
            this.config
        ).then(response => {
            if (response.status === 200) {
                console.log(response)
                this.setState({
                    id: response.data.user.id,
                    first_name: response.data.user.first_name,
                    last_name: response.data.user.last_name,
                    email: response.data.user.email,
                    role: response.data.user.role,
                    gender: response.data.user.gender,
                    phone: response.data.user.phone,
                    photo:response.data.user.photo
                })
            }
            else {
                console.log(response.data.message);
            }
        }

        )
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        console.log(this.state)
        // console.log(response)

        if (this.state.role === 'admin' && (localStorage.getItem('isLoggedIn'))) {
            return (
                <div className='bg-light ' style={{width:"1350px"}}>
                    <SignedInNavbar props={this.props} />
                <p className='display-6 text-center'>Control Panel</p>
                    <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light" to='/usersinfo'>Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light" to='/eventsinfo'>Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light" to='/categoryinfo'>Category</Link>
                    </li>
                    </ul>

                    <div className='row justify-content-around p-3'>
                        <div className=" card shadow-lg w-25 h-25 col-lg-3 ">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.first_name} {this.state.last_name}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-envelope-fill text-dark px-2"></i>
                                    <span className='lead'>{this.state.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card  shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-gender-male text-dark px-2"></i>
                                    <span className='lead'>{this.state.gender}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-around p-2'>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.role}</span>
                                    <Link to='/addservice' className='btn btn-danger btn-sm opacity-75 text-center mx-3'>Add Service</Link>

                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-telephone-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-center lead'>_______________________________________________</p>

                        <p className='text-center lead'>Your Events</p>
            {this.state.events.map( event =>
                <div key={event.id} className=" ">
                   <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date <i className="bi bi-calendar-week p-2"></i></th>
                                <th scope="col">Location <i className="bi bi-geo-alt-fill p-2"></i></th>
                                <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">{event.id}</th>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
                                </tr>
                            </tbody>
                            </table>
                            <div className='row justify-content-center'>
                             <Link className='btn btn-danger col-lg-2 text-center m-3 opacity-75' to={{
                            pathname:'/category',
                            event_id:event.id
                        }}>Buy Service</Link>
                        </div>
            </div>)}    
        </div>
                    <Footer />

                </div>
            )
        }
        if (this.state.role === 'vendor' && (localStorage.getItem('isLoggedIn'))) {
            return (
                <div className='bg-light ' style={{width:"1350px"}}>
                    <SignedInNavbar props={this.props} />
                    <p className='display-6 text-center'>Your Account info</p>
                    <div className='row justify-content-around p-3'>
                        <div className=" card shadow-lg w-25 h-25 col-lg-3 ">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.first_name} {this.state.last_name}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-envelope-fill text-dark px-2"></i>
                                    <span className='lead'>{this.state.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card  shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-gender-male text-dark px-2"></i>
                                    <span className='lead'>{this.state.gender}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-around p-2'>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.role}</span>
                                    <Link to='/addservice' className='btn btn-danger btn-sm opacity-75 text-center mx-3'>Add Service</Link>

                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-telephone-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.phone}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <p className='text-center lead'>_______________________________________________</p>

                        <p className='text-center lead'>Your Events</p>

            {this.state.events.map( event =>
                <div key={event.id} className=" ">
                   <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date <i className="bi bi-calendar-week p-2"></i></th>
                                <th scope="col">Location <i className="bi bi-geo-alt-fill p-2"></i></th>
                                <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">{event.id}</th>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
                                </tr>
                            </tbody>
                            </table>
                            <div className='row justify-content-center'>
                             <Link className='btn btn-danger col-lg-2 text-center m-3 opacity-75' to={{
                            pathname:'/category',
                            event_id:event.id
                        }}>Buy Service</Link>
                        </div>
            </div>)}    
        </div>

                    <Footer />

                </div>
            )
        }
        if (localStorage.getItem('isLoggedIn'))
            return (
                <div className=' bg-light ' style={{width:"1350px"}}>
                    <SignedInNavbar props={this.props} />
                    <p className='display-6 text-center'>Your Account info</p>

                    <div className='row justify-content-around p-3'>
                        <div className=" card shadow-lg w-25 h-25 col-lg-3 ">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.first_name} {this.state.last_name}</span>
                                    <Link to='/accountverify' className='btn btn-danger btn-sm opacity-75 text-center mx-3'>Verify Your Account</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-envelope-fill text-dark px-2"></i>
                                    <span className='lead'>{this.state.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card  shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-gender-male text-dark px-2"></i>
                                    <span className='lead'>{this.state.gender}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-around p-2'>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-person-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.role}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-lg w-25 h-25 col-lg-3">
                            <div className="card-body">
                                <div className="card-text fs-3 font-weight-light">
                                    <i className="bi bi-telephone-fill text-dark px-2 "></i>
                                    <span className='lead'>{this.state.phone}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />

                </div>
            )

    }
}

export default Profile