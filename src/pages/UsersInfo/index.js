import React ,{Component} from 'react'
import axios from 'axios'
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

class UsersInfo extends Component{
    constructor(props){
        super(props)
        this.state={
           users:[]
        }
    }
    tokenn=JSON.parse(localStorage.getItem("userData"));
 confiig={
    headers:{"Accept":"application/json",
        'Authorization':`Bearer ${this.tokenn}`}
};

componentDidMount(){
axios.get(
        "http://127.0.0.1:8000/api/cpanel/users", 
       
       this.confiig
       ).then(res=>{
        if(res.status ===200){
            console.log(res)
           this.setState({
               users:res.data.users
           })
           console.log(this.state.users)
        }else{
            console.log(res.data.message);
        }
           
           
        }).catch(function (error) {
                console.log(error);
            });
}

render(){
    if (this.state.users.length && localStorage.getItem('isLoggedIn')){
    return(
        <section>
            <SignedInNavbar/>

        <div className='container-xxl'>
           <p className='text-center display-6'>All Users</p> 
        <div className=''>
            {this.state.users.map( user =>
                <div key={user.id} className="row justify-content-center py-3">
            
                    <div className="card shadow-lg  col-lg-5 ">
                    <div className="card-header bg-dark bg-gradient text-center text-light">
                      <i className="bi bi-list-ol p-2"></i>  User ID: {user.id}
                    </div>
                      {/* <img src={user.photo} alt='sa'></img> */}

                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-person p-2"></i>{user.first_name} {user.last_name}</h5>
                        <p className="card-text"><i className="bi bi-envelope p-2"></i>{user.email}</p>
                        <p className="card-text">Role: {user.role}</p>
                        <Link to={{
                            pathname:'/userrole',
                            state:user.email
                        }} className='btn btn-danger opacity-75  mb-2'>
                        Change Primision
                        </Link >
                        <p className="card-text"> <i className="bi bi-gender-male p-2"></i>{user.gender}</p>
                        <p className="card-text"> <i className="bi bi-telephone p-2"></i>{user.phone}</p>
                        <p className="card-text">Created At: {user.created_at}</p>
                        <p className="card-text">Updated At {user.updated_at}</p>
                    </div>
                    </div>
            </div>)}    
        </div>
        </div>
        <Footer/>
        </section>
    )}
    else{
        return(
            <div className='display-6 text-center'>
                No Users
            </div>
        )
    }
}

}
export default UsersInfo;