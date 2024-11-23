import React, { Component }  from 'react';
import axios from "axios";
import Footer from '../../components/Footer';
import SignedInNavbar from '../../components/SignedInNav';


class UserRole extends Component {
constructor(props) {
		super(props)
    

		this.state = {
			email: '',
			role: '',
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
  
handleForm = e => {
  
      e.preventDefault();
        axios.post(
            "http://127.0.0.1:8000/api/cpanel/change-permissions", 
            this.state, 
            this.config
          )
          
          .then(response => {
            console.log(response);
             

            // access response.data in order to check formcarry response
            if(response.data.status){
               this.props.history.push('/usersinfo')
              
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
        const  {role,error} = this.state
    console.log(this.props.location.state)
       return (

    <section id="" className='bg-light'>
          <SignedInNavbar />

    <div className="container-xxl bg-light">
    
    <div className="text-center">
        <h2 className='p-2'>Change Primision</h2>
        <p className="lead p-2">Enter Email And Role</p>
    </div>
    <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <form onSubmit={this.handleForm} className='p-5 needs-validation'>
            <label htmlFor="validationTooltipEmail" className="form-label">Email address:</label>
            <div className="input-group has-validation mb-4">
            <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
            </span>
            <input type="email" value={this.props.location.state} className="form-control" placeholder="e.g. Ahmed@example.com" onChange={this.handleFields} name="email" id="validationTooltipEmail" aria-describedby="validationTooltipUsernamePrepend" required />
        
            </div>
            <label htmlFor="validationTooltip03" className="form-label">Role</label>
            <div className="mb-4 input-group">
            <span className="input-group-text">
                <i className="bi bi-person text-secondary"></i>
            </span>
            <select className='form-select' name='role' required onChange={this.handleFields} value={role}>
                <option value='user' defaultValue>User</option>
                <option value='vendor'>Vendor</option>  
                <option value='buyer'>Buyer</option>  
                <option value='admin'>Admin</option>  
            </select>  
            
            </div>
            <div className=" text-center">
            <button type="submit" className="btn btn-danger opacity-75 shadow-lg w-50 text-light mx-5">Change</button>         
            </div>
        </form>
        {error && <p className='lead p-3 text-center'>{error}</p>}
        </div>
    </div>
    </div>

    <Footer />
</section>
      
      
      
    )

    }
}


export default UserRole;
