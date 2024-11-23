import React  from 'react';

const Weather = (props) => {
var current = new Date();

var tommorow = new Date()
tommorow.setDate(current.getDate() + 1);

var day2 = new Date()
day2.setDate(current.getDate() + 2)

var day3 = new Date()
day3.setDate(current.getDate() + 3)

var day4 = new Date()
day4.setDate(current.getDate() + 4)

var day5 = new Date()
day5.setDate(current.getDate() + 5)

var day6 = new Date()
day6.setDate(current.getDate() + 6)

var day7 = new Date()
day7.setDate(current.getDate() + 7)

var day8 = new Date()
day8.setDate(current.getDate() + 8)

var day9 = new Date()
day9.setDate(current.getDate() + 9)

var day10 = new Date()
day10.setDate(current.getDate() + 10)

var day11 = new Date()
day11.setDate(current.getDate() + 11)

var day12 = new Date()
day12.setDate(current.getDate() + 12)

var day13 = new Date()
day13.setDate(current.getDate() + 13)

var day14 = new Date()
day14.setDate(current.getDate() + 14)

var day15 = new Date()
day15.setDate(current.getDate() + 15)

    return (
        
        <div className="container-xxl ">
          <div className='row justify-content-between p-4'>
            {
                
                props.temp[0] && 
                <div className="card col-lg-3  p-4 ">
                  <div>
                    <div className="card-body">
                      <h5 className="card-title text-start"> <i className="bi bi-calendar3 p-3 p-3"></i>{current.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i> Max Temperature:{ props.temp[0].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[0].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[0].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[0].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                        </div>
                      </div>
                        </div>

                // <p className="info_key fs-4 text-center"> Temperature: 
                //    <i className="bi bi-thermometer-half"></i>
                //     <span className="info_value">Max:{ props.temp[0].temp.max }	</span>
                // </p> 
                
            }
        
            {
                
                props.temp[1] && 
                <div className="card  p-4  col-lg-3 ">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{tommorow.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[1].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[1].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[1].weather[0].description }	
                      <img src={"http://openweathermap.org/img/w/" + props.temp[1].weather[0].icon + ".png"} alt='sa'></img>
                    </div>
                      </div>
                       </div>
                        </div>
            }

              {
                
                props.temp[2] && 
                <div className="card  p-4  col-lg-3 ">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day2.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[2].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[2].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[2].weather[0].description }	
                      <img src={"http://openweathermap.org/img/w/" + props.temp[2].weather[0].icon + ".png"} alt='sa'></img>
          
                    </div>

                      </div>
                      </div>
                        </div>
            }
  {
                
                props.temp[3] && 
                <div className="card  p-4  col-lg-3 ">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day3.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[3].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[3].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[3].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[3].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                        </div>
                      </div>
                        </div>
            }
            </div>
          <div className='row justify-content-between p-4'>

  {
                
                props.temp[4] && 
                <div className="card  p-4  col-lg-3 ">
                  <div>
                    <div className="card-body text-start">
                        <h5 className="card-title"><i className="bi bi-calendar3 p-3"></i>{day4.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[4].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[4].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[4].weather[0].description }	
                      <img src={"http://openweathermap.org/img/w/" + props.temp[4].weather[0].icon + ".png"} alt='sa'></img>
                    
                    </div>

                      </div>
                       </div>
                        </div>
            }

  {
                
                props.temp[5] &&  
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day5.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[5].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[5].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[5].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[5].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                      </div>
                      </div>
                        </div>
            }

              {
                
                props.temp[6] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body text-start">
                        <h5 className="card-title"><i className="bi bi-calendar3 p-3"></i>{day6.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[6].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[6].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[6].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[6].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                      </div>
                      </div>
                        </div>
            }

  {
                
                props.temp[7] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day7.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[7].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[7].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[7].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[7].weather[0].icon + ".png"} alt='sa'></img>
                    	</div>
                      </div>
                      </div>
                        </div>
            }
            </div>
          <div className='row justify-content-between p-4'>

  {
                
                props.temp[8] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day8.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[8].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[8].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[8].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[8].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                          </div>
                      </div>
                        </div>
            }

              {
                
                props.temp[9] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day9.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[9].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[9].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[9].weather[0].description }	
                      <img src={"http://openweathermap.org/img/w/" + props.temp[9].weather[0].icon + ".png"} alt='sa'></img>
                    
                    </div>
                      </div>
                      </div>
                        </div>
            }

  {
                
                props.temp[10] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day10.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[10].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[10].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[10].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[10].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                        </div>
                      </div>
                        </div>
            }

              {
                
                props.temp[11] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day11.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[11].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[11].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[11].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[11].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                      </div>
                       </div>
                        </div>
            }
                  </div>
          <div className='row justify-content-between p-4'>

              {
                
                props.temp[12] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day12.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[12].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[12].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[12].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[12].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                        </div>
                      </div>
                        </div>
            }

  {
                
                props.temp[13] && 
                <div className="card  p-4  col-lg-3" >
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day13.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[13].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[13].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[13].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[13].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                          </div>
                      </div>
                        </div>
            }

  {
                
                props.temp[14] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day14.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[14].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[14].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[14].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[14].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                    </div>
                      </div>
                        </div>
            }

            {
                
                props.temp[15] && 
                <div className="card  p-4  col-lg-3">
                  <div>
                    <div className="card-body">
                        <h5 className="card-title text-start"><i className="bi bi-calendar3 p-3"></i>{day15.toLocaleDateString()}</h5>
                    <div className="info_value"><i className="bi bi-thermometer-high"></i>Max Temperature:{ props.temp[15].temp.max }	</div>
                    <div className="info_value"><i className="bi bi-thermometer"></i>Min Temperature:{ props.temp[15].temp.min }	</div>
                    <div className="info_value">Description:{ props.temp[15].weather[0].description }
                      <img src={"http://openweathermap.org/img/w/" + props.temp[15].weather[0].icon + ".png"} alt='sa'></img>
                    
                    	</div>
                      </div>
                      </div>
                        </div>
            }
            </div>
            {/* {
                props.error && 
                <p className="info_key fs-4 text-center"> error: 
                    <span className="info_value "> {props.error}	</span>
                </p> 
            }
             */}
            
            
           
        </div>
    )
}

export default Weather