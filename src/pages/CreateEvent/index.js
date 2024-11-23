import React, { Component } from 'react';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer'
import axios from 'axios';

class CreateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            gov_id: '',
            location: '',
            kind: '',
            type: '',
            budget: '',
            date:'',
            description:'',
            error:''
        }
    }
    tokeen = JSON.parse(localStorage.getItem("userData"))
    config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`
        }
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();


        axios.post(
            "http://127.0.0.1:8000/api/events/create",
            this.state,
            this.config


        ).then(response => {

            if (response.data.status === true) {
                console.log(response)

                this.props.history.push("/")
            }
            else {
                console.log(response.data.message);
                this.setState({
                    error:response.data.message
                })
            }
        }
        )
            .catch(function (error) {
                console.log(error);
            });
        e.preventDefault();

    }

    render() {
        console.log(this.state)
        console.log(this.props)
        // console.log(JSON.parse(localStorage.getItem("userData")))
        if (localStorage.getItem('isLoggedIn'))
        return (
            <section id="signup " className=" bg-light">
                <SignedInNavbar props={this.props} />
                <div className="container-xxl bg-light">

                    <div className="text-center">
                        <h2 className="m-4 p-4">Create An Event </h2>
                        <p className="lead">Enter Your Event info</p>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-6">

                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="email" className="form-label">Event Name:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-calendar-event-fill text-secondary"></i>
                                    </span>
                                    <input type="text" id="name" className="form-control" placeholder="Event Name" onChange={this.handleChange} required />
                                </div>

                                <label htmlFor="name" className="form-label">Gov:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                                    </span>
                                      <select  id="gov_id" className="form-select"  onChange={this.handleChange} required >
                                        <option value={0} defaultValue></option>
                                        <option value={1} >Damascus</option>
                                        <option value={2}>Tartus</option>  
                                        <option value={3}>Daraa</option>  
                                        <option value={4}>Aleppo</option>  
                                        <option value={5}>Deir ez Zor</option>  
                                        <option value={6}>Hama</option>  
                                        <option value={7}>Homs</option>  
                                        <option value={8}>Latakia</option>  
                                        <option value={9}>As Suwayda</option>  
                                        <option value={10}>Ar Raqqah</option>  
                                        <option value={11}>Idlib</option>  
                                        <option value={12}>Quneitra</option>  
                                        <option value={13}>Al Hasakah</option>  
                                    </select>
                                </div>


                                <label htmlFor="name" className="form-label">Event Location:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                                    </span>
                                    <input type="text" id="location" className="form-control" placeholder="The Location" onChange={this.handleChange} required />
                                </div>


                                <label htmlFor="name" className="form-label">Kind:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-balloon-fill text-secondary"></i>
                                    </span>
                                    <select  id="kind" className="form-select"  onChange={this.handleChange} required >
                                        <option value=""defaultValue></option>
                                        <option value="birthDay">BirthDay</option>
                                        <option value="graduation">graduation</option>  
                                        <option value="wedding">wedding</option>  
                                    </select>   
                                </div>


                                <label htmlFor="name" className="form-label">Event Type:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-file-lock2 text-secondary"></i>
                                    </span>
                                    <select  id="type" className="form-select" onChange={this.handleChange} required >
                                        <option value=""></option>  
                                        <option value="public" defaultValue>public</option>  
                                        <option value="private">private</option>  
                                    
                                    </select>
                                </div>


                                <label htmlFor="name" className="form-label">Event Budget:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-cash-coin text-secondary"></i>
                                    </span>
                                    <input type="text" id="budget" className="form-control" placeholder="The Budget" onChange={this.handleChange} required />
                                </div>

                                <label htmlFor="name" className="form-label">Event Date:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-calendar-date text-secondary"></i>
                                    </span>
                                    <input type="text" id="date" className="form-control" placeholder="Example: 2022-2-2" onChange={this.handleChange} required />
                                </div>

                                <label htmlFor="name" className="form-label">Event description:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-book-half text-secondary"></i>
                                    </span>
                                    <textarea  id="description" className="form-control" placeholder="The description" onChange={this.handleChange} required />
                                </div>

                                <div className="mb-4 text-center">
                                    <button type="submit" className="btn btn-danger opacity-75  shadow-lg w-50 text-light">Create</button>
                                </div>

                            </form>
                            {this.state.error && <p className='lead text-center'> {this.state.error}</p>}
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}
export default CreateEvent;