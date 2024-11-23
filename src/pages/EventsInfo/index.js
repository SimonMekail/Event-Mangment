import React ,{Component} from 'react'
import axios from 'axios'
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom'

class EventsInfo extends Component{
    constructor(props){
        super(props)
        this.state={
           events:[]
        }
    }
    tokenn=JSON.parse(localStorage.getItem("userData"));
 confiig={
    headers:{"Accept":"application/json",
        'Authorization':`Bearer ${this.tokenn}`}
};

componentDidMount(){
axios.get(
        "http://127.0.0.1:8000/api/events", 
       
       this.confiig
       ).then(res=>{
        if(res.status ===200){
            console.log(res)
           this.setState({
               events:res.data.events
           })
           console.log(this.state.events)
        }else{
            console.log(res.data.message);
        }
           
           
        }).catch(function (error) {
                console.log(error);
            });
}

render(){
    if (this.state.events.length && localStorage.getItem('isLoggedIn')){
    
    return(
        <section>
            <SignedInNavbar/>
            <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light"
                        to={{
                            pathname:'/eventfilter',
                            event_filter:"sent"
                        }}>Sent Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light"
                        to={{
                            pathname:'/eventfilter',
                            event_filter:'created'
                        }}>Created Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-danger opacity-75 m-2  text-light"
                        to={{
                            pathname:'/eventfilter',
                            event_filter:'seen'
                        }}>Seen Events</Link>
                    </li>
                    </ul>

        <div className='container-xxl'>
           <p className='text-center display-6'>All Events</p> 
        <div className=''>
            {this.state.events.map( event =>
                <div key={event.id} className="row justify-content-center py-3">
                   <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date <i className="bi bi-calendar-week p-2"></i></th>
                                <th scope="col">Location <i className="bi bi-geo-alt-fill p-2"></i></th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">{event.id}</th>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
                                <td>{}</td>
                                </tr>
                            </tbody>
                            </table>
                    
                    
                    
                    {/* <div className="card shadow-lg  col-lg-5 ">
                    <div className="card-header bg-dark bg-gradient text-center text-light">
                        Event Name: {event.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-calendar-week p-2"></i>{event.date}</h5>
                        <p className="card-text"><i className="bi bi-geo-alt-fill p-2"></i> {event.location}</p>
                        <p className="card-text">Description: {event.description}</p>
                    </div>
                    </div> */}
            </div>)}    
        </div>
        </div>
        <Footer/>
        </section>
    )}
    else{
        return(
            <div className='display-6 text-center'>
                No Events
            </div>
        )
    }
}

}
export default EventsInfo;