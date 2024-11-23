import React ,{Component} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class ShowEvents extends Component{
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
        <div className='container-xxl bg-light'>
           <p className='text-center display-6'>Public Events</p> 
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">{event.id}</th>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
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
    )}
    else{
        return(
            <div className='display-6 text-center'>
                No Public Event
            </div>
        )
    }
}

}
export default ShowEvents;