import React, { Component }  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';
 
class Category extends Component {
 constructor(props) {
        super(props)
        this.state = {
            categories:[]
        }
    }
    tokeen = JSON.parse(localStorage.getItem("userData"))
    config = {
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${this.tokeen}`
        }
    }
    componentDidMount() {
     
        axios.get(
            "http://127.0.0.1:8000/api/categories",
            this.config
        ).then (response => {
            if(response.status===200){
                console.log(response)
                this.setState({
                    categories:response.data.categorys
                })
            }
          })}

render(){

    return(
      <div className='bg-light '>
        <SignedInNavbar/>
        <p className='display-6 text-center'>Check Out Our Category for your event {this.props.location.event_id}</p>
        <div className='container'>

            <div className='row'>
            {this.state.categories.map( category =>
                <div key={category.id} className="col-lg-4 ">
                  <div className=' p-4'>
                   <div className="card shadow-lg ">
                    <div>
            <img src={"http://127.0.0.1:8000/storage/" + category.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={{
                            pathname:'/showservice',
                            category_id:category.id,
                            event_id:this.props.location.event_id
                        }} className='btn btn-danger opacity-75  mb-2'>
                        Check All Services
                        </Link >
            </div>
            </div>
              </div>
                 </div>
            </div>)}    
        </div>
</div>
<Footer/>
</div>
    )
}
}

export default Category;
