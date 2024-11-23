import React  from 'react';
import Work from '../Work';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SignedInNav from '../../components/SignedInNav'
// import Category from '../Category';
import ShowEvents from '../ShowEvents';
const Home = (props) => {
      if (!localStorage.getItem('isLoggedIn'))

  return (
      <section id="intro">
          <Navbar />
    <div className="container-xxl">
      <div className="row  justify-content-center align-items-center bg-light">
        <div className="col-md-8 text-center">
          <h1>
            <div className="display-4">Event Mangment System</div>
            <div className="display-6 text-muted">An event tech platform for face-to-face, online, and hybrid experiences</div>
          </h1>
          <p className="lead my-4 text-muted">Are you using manual processes to plan and execute great events? Ditch the busy work.
          With This System , you will have the power to automate tasks and simplify the entire 
            planning process so you can focus on what matters most of your attendees.</p>
        <a href="signup" className="btn btn-danger opacity-75 btn-lg w-25 mb-4 text-light">Start Now</a>
        
        </div>
      </div>
    </div>
  <Work />
  {/* <Category /> */}
  <Footer />
  </section>
    )
    else
    return(
      <section id="intro">
          <SignedInNav props={props} />
    <div className="container-xxl">
      <div className="row  justify-content-center align-items-center bg-light">
        <div className="col-md-8 text-center">
          <h1>
            <div className="display-4">Event Mangment System</div>
            <div className="display-6 text-muted">An event tech platform for face-to-face, online, and hybrid experiences</div>
          </h1>
          <p className="lead my-4 text-muted">Are you using manual processes to plan and execute great events? Ditch the busy work.
          With This System , you will have the power to automate tasks and simplify the entire 
            planning process so you can focus on what matters most of your attendees.</p>
        <a href="signup" className="btn btn-danger opacity-75 btn-lg w-25 mb-4 text-light">Start Now</a>
        
        </div>
      </div>
    </div>
  <Work />
  {/* <Category /> */}
  <ShowEvents/>
  <Footer />
  </section>
    )
}

export default Home;