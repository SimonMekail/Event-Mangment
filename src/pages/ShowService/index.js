import React ,{Component} from 'react'
import axios from 'axios'
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';

class ShowService extends Component{
    constructor(props){
        super(props)
        this.state={
           services:[]

        }
    }
    tokenn=JSON.parse(localStorage.getItem("userData"));
 confiig={
    headers:{"Accept":"application/json",
        'Authorization':`Bearer ${this.tokenn}`}
};
tokeen = JSON.parse(localStorage.getItem("userData"))
    config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`,
        }
    }



componentDidMount(){

axios.get(
        "http://127.0.0.1:8000/api/services/"+this.props.location.category_id, 
       
       this.confiig
       ).then(res=>    {
        if(res.data.status){
            console.log(res)
           this.setState({
            services:res.data.Services
               
           })
        //    console.log(this.state.events)
        }else{
            console.log(res.data.message);
        }
           
           
        }).catch(function (error) {
                console.log(error);
            });
}

render(){
    
console.log(this.state)
console.log(this.props)
if (this.state.services.length && localStorage.getItem('isLoggedIn'))
    return(
        <section>
            <SignedInNavbar/>
        <div className='container-xxl'>
            
           <p className='text-center container display-6'>services</p> 
        <div className='row'>
            {this.state.services.map( service =>
                <div key={service.id} className="col-lg-4 p-4">
               
                 <div className=' p-4'>
                   <div className="card shadow-lg ">
                    <div>
            <img src={"http://127.0.0.1:8000/storage/" + service.photo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text"><i className="bi bi-coin p-2"></i>{service.price}</p>
              <p className="card-text">Status: {service.status}</p>
              <p className="card-text">Description: {service.description}</p>
              <button className='btn btn-danger opacity-75  mb-2' onClick={
             e => {
             e.preventDefault();
             axios.post(
             "http://127.0.0.1:8000/api/add-services/create/" + this.props.location.event_id + '/' + service.id,
             "",
             this.config
             ).then(response => {
                if(response.data.status){
                     console.log(response)
               this.props.history.push('/')
                }
             })
}
              }>Add To Event </button >
            </div>
            </div>
              </div>
                 </div>

            </div>)}    
        </div>
        </div>

        <Footer/>

        </section>
    )
    else{
        return(
            <div className='display-6 bg-light text-center'>
                No service
            </div>
        )
    
}
}}
export default ShowService;