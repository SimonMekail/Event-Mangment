import React  from 'react';

const Form = (props) => {
    return (
        <div className="">
    
    <div className="text-center">
        <h2 className="m-4 p-4"><span className='display-4'><i className="bi bi-cloudy text-secondary p-2"></i></span>Get Weather Info</h2>
        <p className="lead">Enter Your Country And City</p>
    </div>
    <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <form onSubmit={props.getWeather}>
            <label htmlFor="email" className="form-label">City Name:</label>
            <div className="input-group mb-5 pb-5">
            <span className="input-group-text">
                <i className="bi bi-geo-alt-fill text-secondary"></i>
            </span>
            <input type="text" id="city" name="city" className="form-control" placeholder="City Name" required/> 
            </div>

            <div className="mb-4 text-center">
            <button type="submit" className="btn btn-danger opacity-75 shadow-lg w-50 text-light">Get Weather</button>
            </div>

        </form>
        </div>
    </div>
    </div>


        // <form onSubmit={props.getWeather}>
        //     <input type="text" name="city" placeholder="City..." />
        //     <input type="text" name="country" placeholder="Country ..."/>
        //     <button>Get Weather</button>
        // </form>
    )
}

export default Form