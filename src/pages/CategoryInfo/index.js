import React, { Component } from 'react';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer'
import axios from 'axios';

class CategoryInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            photo:null,
            error:''
        }
    }
    tokeen = JSON.parse(localStorage.getItem("userData"))
    config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`,
        },
        onUploadProgress: progressEvent =>{
            this.setState({
                progress:   Math.round( progressEvent.loaded/progressEvent.total * 100)

            })
        }

            
    };

    fileSelectedHandler = event => {
        this.setState({
            photo:event.target.files[0]
        })
        // console.log(this.state.photo)
        console.log(event.target.files[0])
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('name',this.state.name)
        formData.append('photo',this.state.photo,this.state.photo.name)
    
        axios.post(
            "http://127.0.0.1:8000/api/services/create",
            // this.state,
            formData,
            this.config
            

        ).then(response => {

            if (response.data.status) {
                console.log(response)
               this.props.history.push('/profile')
                

            }
            else {
                console.log(response);
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
                        <h2 className="m-4 p-4">Create New Category </h2>
                        <p className="lead">Enter Category Name and Photo</p>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-6">

                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="email" className="form-label">Category Name:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-calendar-event-fill text-secondary"></i>
                                    </span>
                                    <input type="text" id="name" className="form-control" placeholder="Category Name" onChange={this.handleChange} required />
                                </div>

                                    <label htmlFor="name" className="form-label">Service Photo:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-image text-secondary"></i>
                                    </span>
                                <input type="file" id="photo" className="form-control" onChange={this.fileSelectedHandler} required/>

                                </div>

                                <div className="mb-4 text-center">
                                    <button type="submit" className="btn btn-danger opacity-75  shadow-lg w-50 text-light">Create</button>
                                </div>

                            </form>
                        </div>
                    </div>
        {this.state.error && <p className='lead p-3 text-center'>{this.state.error}</p>}
        {this.state.progress && <p className='lead p-3 text-center '>Upload Progress:{this.state.progress} %</p>
        }
                </div>
                <Footer />
            </section>
        )
    }
}
export default CategoryInfo;