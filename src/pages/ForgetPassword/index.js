import React, { Component }  from 'react';
import Navbar from '../../components/Navbar'
import axios from "axios";
import Footer from '../../components/Footer';

class ForgetPassword extends Component {
constructor(props) {
		super(props)

		this.state = {
			email: '',
            error:''
		}
	}

handleForm = e => {
		e.preventDefault();
        axios.post(
            "localhost:8000/api/forgot-password", 
            this.state, 
            {headers: {"Accept": "application/json"}}
          )
          .then( response =>  {

            // access response.data in order to check formcarry response
            if(response.data.status){
                console.log(response.data)
              // handle success
              this.props.history.push('/login' )
            } else {
              // handle error
              console.log(response.data.message);
              this.setState({
                error:response.data.message
              })
            }
     
          })
          .catch(function (error) {
            console.log(error);
          });
        
        e.preventDefault();
      }
     
      handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render(){
        const {email,error } = this.state
        console.log(this.state)
    return (
    <section id="signup" className='bg-light'>
        <Navbar />

    <div className="container-xxl bg-light">
    
    <div className="text-center">
        <h2 className="m-4 p-4">Forget Password </h2>
        <p className="lead">Enter Your Email </p>
    </div>
    <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <form onSubmit={this.handleForm} className="needs-validation">

        <label htmlFor="validationTooltipEmail" className="form-label">Email address:</label>
            <div className="input-group mb-4 has-validation">
            <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
            </span>
            <input type="email" value={email} className="form-control" placeholder="e.g. Ahmed@example.com" onChange={this.handleFields} name="email" id="validationTooltipEmail" aria-describedby="validationTooltipUsernamePrepend" required/>
            
            </div>

            <div className="mb-4 text-center">
            <button type="submit" className="btn btn-danger opacity-75 shadow-lg w-50 text-light m-4">SignUp</button>
            </div>

        </form>
        </div>
        {error && <p className='lead p-3 text-center'>{error}</p>}


    </div>

    </div>

    <Footer/>
</section>
    )
}
}
export default ForgetPassword;