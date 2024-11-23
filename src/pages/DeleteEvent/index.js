import React ,{Component} from 'react'
import axios from 'axios'
// import SignedInNavbar from '../../components/SignedInNav'
// import Footer from '../../components/Footer'

class DeleteEvent extends Component{
    constructor(props){
        super(props)
       this.state={
           id:''
       }
    }
    tokenn='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTJkMTBjODRhYTY1YmM4ZjYxZmU1YjJlYzIyY2FkYTljYmNmYzhhYmZhMWMxNjEwMDg5NTlmYjFhYWIxMDU3N2Y4NWYwMDk0ZjUwOTcwMjUiLCJpYXQiOjE2NTc5Njg2MDQuNTQ0MzYsIm5iZiI6MTY1Nzk2ODYwNC41NDQzNjgsImV4cCI6MTY4OTUwNDYwNC40Mjg1NDksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.bWZnpLs83GPu479T3QqUXfFIkmiTcr8fzMYdTJky8T_NQ3YxFcrNFF1xYFmTmeCu8gXIkDtq94906hfd9hG28JRmWCDyUmfzKIbN9Msdan5PIED5WyCvfV5s3Fx6naQN5CcHeVpr6rSgAEefwkURXjWR1BWu0cSDhsF4fCld3Hwwc3HniE46ZEKBMbrjY7RcZghGYoIjYPVXgQ6EtwZnyG_MZbDpC1suixt8EYtScKiNTAmic51qmDxoBM7mF6ZyQqH3yrrFtBEU-79xsSH-NIrXwWsdSr9QvuOPG74QhnjIpkFGsjdEICQwrwkpw0Gd0L6_JtdoBy-OjdPvtGZWUlUfAJbwy2nTLaVULIys5MwUpz0Q-hKNlkrJ7laN6lnm9ACjrYanPxsapH32KgPCsyMOn2r_UAZXSLTtVxlq9a0sghGLWqAKrsN9NmgBnaGFgRPno5CL0wQ55cY-029D9IbjqkpHW40Ni0HnhdOABtyc2p4sX6dWFiFkWxQaOrPYXCKjC3X2rtNWuJrhaCUqlylrPQNH_AqVnHn1I6pYkYJwpqw3u2emQZ1lq3Cl1QpapQl-iPigY4Xv5jndaQ30ynK2nnnRQ7CJzyldhK22IYbXoG-zyesOI8wl-uo2IanTxmCbcYNucqvjIqvQwfJjSGpkk8TFXnHpUnnCHSGRILE'
 confiig={
    headers:{"Accept":"application/json",
        'Authorization':`Bearer ${this.tokenn}`}
};
   handlle=(e)=>{
    e.preventDefault();
    
   
    axios.delete(`http://127.0.0.1:8000/api/event/${this.state.id}`,
                this.confiig

    ).then(function (response) {
        console.log('Delete Success') 
        // access response.data in order to check formcarry response
        if(response.data){
      
          console.log(response.data);
          this.props.history.push('/signedinhome')
       
        } else {
          // handle error
          console.log(response.data.message);
        }
 
      })
      .catch(function (error) {
        console.log(error);
      });
    
    e.preventDefault();
    
  }
  handlestate=(e)=>this.setState({[e.target.name]:e.target.value});

   
  render (){
      return(
          <div>
        <h2>Delete Event</h2>
        <form onSubmit={this.handlle}>
        <input type="id"  className="form-control" placeholder="enter the id for event" onChange={this.handlestate} name="id"  required />
        
      

      
       <button type="submit" >delete</button>
       </form>
        </div>
      )
  }

}
export default DeleteEvent;