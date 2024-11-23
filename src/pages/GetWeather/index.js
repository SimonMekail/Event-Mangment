import React, { Component } from 'react';
import Form from './form';
import Weather from './weather';
import SignedInNavbar from '../../components/SignedInNav';
import Footer from '../../components/Footer';

// const API_KEY = "e36ed364400282e43250b6c4c0274d44";
const API_KEY = "927d09bc49dbee6aac7f5cb1df707542";

class GetWeather extends Component {

  state = {
    days:[],
    city:'',
    lon:'',
    lat:'',
  } 

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;

    const location_api = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
    const location_data = await location_api.json();

    const lat = location_data[0].lat
    const lon = location_data[0].lon
    
    const api = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=16&appid=${API_KEY}`)
    const data =  await api.json();

    console.log(data)
  
    if(city) {
      this.setState({
    days:data.list,
    city:data.city.name,
    lon:data.city.coord.lon,
    lat:data.city.coord.lat
      })
    // } else {
    //   this.setState({
    //     temperature: '',
    //     city: '',
    //     country: '',
    //     humidity: '',
    //     description: '',
    //     error : 'Please Enter Data'
    //   })
    }
  }

  render() {
    console.log(this.state.days[0])
    // console.log(this.state.days[0])
  if (localStorage.getItem('isLoggedIn'))
    return (
      <section className="bg-light">
        <SignedInNavbar props={this.props} />
      <div className="container-xxl bg-light">
            <Form getWeather={this.getWeather} />
            <p className='text-center font-weight-light fs-2 '>
              <i className="bi bi-geo-alt-fill text-dark"></i>
               {this.state.city}
              </p>
              <p className='text-center font-weight-light fs-3'>
              Longitude: {this.state.lon}  | Latitude: {this.state.lat}
              </p>
              
            <Weather className=''
              temp={this.state.days} 
            />
      </div>
      <Footer />
      </section>
    );
  }
}

export default GetWeather;