import React, { Component }  from 'react';
// import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import axios from "axios";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


class Login extends Component {
constructor(props) {
		super(props)
    

		this.state = {
			email: '',
			password: '',
      error:''
    
     
		}
     
    
	}
  
  
handleForm = e => {
  
      e.preventDefault();
        axios.post(
            "http://127.0.0.1:8000/api/auth/login", 
            this.state, 
            {headers: {"Accept": "application/json"}}
          )
          
          .then(response => {
            console.log(response);
             

            // access response.data in order to check formcarry response
            if(response.data.status){
           localStorage.setItem("isLoggedIn",true);
              localStorage.setItem("userData",JSON.stringify(response.data.user.access_token));
              
               this.props.history.push('/')
             // this.setState({tok:response.data})
             
              
             
              // this.props.history.push('/signedinhome')
              // <Redirect to="/"/>
              // console.log("welcom") 
            
              // handle success
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
     
      handleFields =e=> this.setState({ [e.target.name]: e.target.value })
      
      
    render(){
        const  {email,password,error} = this.state
        // if(this.state.Redirect){
        //  this.props.history.push('/signedinhome')
        
        // }
      // const login=localStorage.getItem("isLoggedIn");
      // if(login){
      //   console.log(login)
      //         this.props.history.push('/')
      // }
        
     
       return (
    
      // { this.state.redirect? (
      //   <section>
      //   <h1> You are Loggerd in!</h1>
      //   <br/>
      //   <p>
      //   <a href="h">Go to Home</a>
      //   </p>

      //   </section>
      // ):(

      
    <section id="" className='bg-light'>
          <Navbar />

    <div className="container-xxl bg-light">
    
    <div className="text-center">
        <h2 className='p-2'>Login</h2>
        <p className="lead p-2">Enter Your Email And Password</p>
    </div>
    <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <form onSubmit={this.handleForm} className='p-5 needs-validation'>
            <label htmlFor="validationTooltipEmail" className="form-label">Email address:</label>
            <div className="input-group has-validation mb-4">
            <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
            </span>
            <input type="email" value={email} className="form-control" placeholder="e.g. Ahmed@example.com" onChange={this.handleFields} name="email" id="validationTooltipEmail" aria-describedby="validationTooltipUsernamePrepend" required />
            
            <span className="input-group-text">
                <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                <i className="bi bi-question-circle text-muted"></i>
                </span>
            </span>
            </div>
            <label htmlFor="validationTooltip03" className="form-label">Password</label>
            <div className="mb-4 input-group">
            <span className="input-group-text">
                <i className="bi bi-key-fill text-secondary"></i>
            </span>
            <input type="password" value={password} className="form-control" placeholder="Your Password" onChange={this.handleFields} name="password" id="validationTooltip03" required/>
            
            <span className="input-group-text">
                <span className="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                <i className="bi bi-question-circle text-muted"></i>
                </span>
            </span>
           
            
            </div>
            <div className=" text-center">
            <button type="submit" className="btn btn-danger opacity-75 shadow-lg w-50 text-light mx-5">Login</button>         
            </div>
        </form>
        <div className='text-center'>
            <Link to='/forgetpassword' className='btn border-danger opacity-75 shadow-lg text-danger'>Forget Password</Link>
        </div>
        {error && <p className='lead p-3 text-center'>{error}</p>}
        </div>
    </div>
    </div>

    <Footer />
</section>
      
      
      
    )

    }
}


export default Login;
