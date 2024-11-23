import React, { Component } from 'react';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer'
import axios from 'axios';

class AddService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            gov_id: '',
            category_id: '',
            price: '',
            photo:null,
            description:'',
            progress:'',
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
        formData.append('gov_id',this.state.gov_id)
        formData.append('category_id',this.state.category_id)
        formData.append('price',this.state.price)
        formData.append('photo',this.state.photo,this.state.photo.name)
        formData.append('description',this.state.description)
    
        axios.post(
            "http://127.0.0.1:8000/api/services/create",
            // this.state,
            formData,
            this.config
            

        ).then(response => {

            if (response.data.status) {
                console.log(response)
               this.props.history.push('/')
                

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
                        <h2 className="m-4 p-4">Create A Service </h2>
                        <p className="lead">Enter Your Service info</p>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-6">

                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="email" className="form-label">Service Name:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-calendar-event-fill text-secondary"></i>
                                    </span>
                                    <input type="text" id="name" className="form-control" placeholder="Service Name" onChange={this.handleChange} required />
                                </div>

                                <label htmlFor="name" className="form-label">Gov ID:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                                    </span>
                                     <select  id="gov_id" className="form-select"  onChange={this.handleChange} required >
                                        <option value={0} defaultValue></option>
                                        <option value={1}>Damascus</option>
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


                                <label htmlFor="name" className="form-label">Category id:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                                    </span>
                                <select  id="category_id" className="form-select"  onChange={this.handleChange} required >
                                        <option value={0} defaultValue></option>
                                        <option value={1}>Cards</option>
                                        <option value={2}>Candy</option>  
                                        <option value={3}>Jewelry</option>  
                                        <option value={4}>Cars</option>  
                                        <option value={5}>Halls</option>  
                                        <option value={6}>Music</option>  
                                        <option value={7}>Clothes</option>    
                                    </select>
                                </div>

                                <label htmlFor="name" className="form-label">Service price:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-cash-coin text-secondary"></i>
                                    </span>
                                    <input type="text" id="price" className="form-control" placeholder="price" onChange={this.handleChange} required />
                                    
                                </div>

                                <label htmlFor="name" className="form-label">Service description:</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">
                                        <i className="bi bi-book-half text-secondary"></i>
                                    </span>
                                    <textarea  id="description" className="form-control" placeholder="The description" onChange={this.handleChange} required />
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
export default AddService;