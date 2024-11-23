import React, { Component }  from 'react';
import Navbar from '../../components/Navbar'
import axios from "axios";
import Footer from '../../components/Footer';

class SignUp extends Component {
constructor(props) {
		super(props)

		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			phone: '',
			gender: '',
            error:''
		}
	}

handleForm = e => {
		e.preventDefault();
        axios.post(
            "http://127.0.0.1:8000/api/auth/signup", 
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
        const {first_name , last_name,email,password,phone,gender,error } = this.state
        console.log(this.state)
    return (
    <section id="signup" className='bg-light'>
        <Navbar />

    <div className="container-xxl bg-light">
    
    <div className="text-center">
        <h2 className="m-4 p-4">Create An Account </h2>
        <p className="lead">Enter Your Account Info</p>
    </div>
    <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <form onSubmit={this.handleForm} className="needs-validation">
            
            <label htmlFor="validationTooltip01" className="form-label">First Name:</label>
            <div className="input-group mb-4">
            <span className="input-group-text">
                <i className="bi bi-person-fill text-secondary"></i>
            </span>
            <input type="text" value={first_name} className="form-control" placeholder="Your First Name" onChange={this.handleFields} name="first_name" id="validationTooltip01" required/>
            </div>

        <label htmlFor="validationTooltip02" className="form-label">Last Name:</label>
            <div className="input-group mb-4">
            <span className="input-group-text">
                <i className="bi bi-person-fill text-secondary"></i>
            </span>
            <input type="text" value={last_name} className="form-control" placeholder="Your Last Name" onChange={this.handleFields} name="last_name" id="validationTooltip02" required/>
            </div>

        <label htmlFor="validationTooltipEmail" className="form-label">Email address:</label>
            <div className="input-group mb-4 has-validation">
            <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
            </span>
            <input type="email" value={email} className="form-control" placeholder="e.g. Ahmed@example.com" onChange={this.handleFields} name="email" id="validationTooltipEmail" aria-describedby="validationTooltipUsernamePrepend" required/>
            
            </div>

            <label htmlFor="validationTooltip03" className="form-label">Password:</label>
            <div className="mb-4 input-group">
            <span className="input-group-text">
                <i className="bi bi-key-fill text-secondary"></i>
            </span>
            <input type="password" value={password} className="form-control" placeholder="Your Password" onChange={this.handleFields} name="password" id="validationTooltip03" required/>
            </div>

    
            <label htmlFor="validationTooltip04" className="form-label">Phone:</label>
            <div className="mb-4 input-group">
            <span className="input-group-text">
                <i className="bi bi-telephone-fill text-secondary"></i>
            </span>
            <input type="number" value={phone} className="form-control" placeholder="Your Phone" onChange={this.handleFields} name="phone" id="validationTooltip04" required/>
            </div>

			<label htmlFor="validationTooltip05" className="form-label" >Gender:</label>
				<select className="form-select" name="gender" value={gender} onChange={this.handleFields} id="validationTooltip05" required >
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>

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
export default SignUp;