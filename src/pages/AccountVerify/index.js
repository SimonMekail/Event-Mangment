import React, { Component } from 'react';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer'
import axios from 'axios';

class AccountVerify extends Component {
    constructor(props) {
        super(props)

        this.state = {
            front_identity:null,
            back_identity:null,
            selfie_identity:null,
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
    fileSelectedHandler = event => {
        this.setState({
            [event.target.id]:event.target.files[0],
        })
        console.log(event.target.files[0])
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('front_identity',this.state.front_identity)
        formData.append('back_identity',this.state.back_identity)
        formData.append('selfie_identity',this.state.selfie_identity)
        

        axios.post(
            "http://127.0.0.1:8000/api/auth/accountv-erification",
            formData,
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
        // console.log(this.props)
        // console.log(JSON.parse(localStorage.getItem("userData")))
        if (localStorage.getItem('isLoggedIn'))
        return (
            <section id="signup " className=" bg-light">
                <SignedInNavbar props={this.props} />
                <div className="container-xxl bg-light">

                    <div className="text-center">
                        <h2 className="m-4 p-4">Verify Your Account </h2>
                        <p className="lead">Enter Three Photos</p>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-6">

                            <form onSubmit={this.handleSubmit}>

                                    <label htmlFor="name" className="form-label">Front Photo:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-image text-secondary"></i>
                                    </span>
                                <input type="file" id="front_identity" className="form-control" onChange={this.fileSelectedHandler} required/>

                                </div>

                                 <label htmlFor="name" className="form-label">Back Photo:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-image text-secondary"></i>
                                    </span>
                                <input type="file" id="back_identity" className="form-control" onChange={this.fileSelectedHandler} required/>

                                </div>

                                 <label htmlFor="name" className="form-label">Selfie Photo:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-image text-secondary"></i>
                                    </span>
                                <input type="file" id="selfie_identity" className="form-control" onChange={this.fileSelectedHandler} required/>

                                </div>

                                <div className="mb-4 text-center">
                                    <button type="submit" className="btn btn-danger opacity-75  shadow-lg w-50 text-light">Create</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}
export default AccountVerify;