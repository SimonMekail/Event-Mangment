import React  from 'react';

const Footer = () => {
    return (
        <div className='bg-dark bg-gradient text-center text-light px-2'>
               {/* <p className='text-start mx-5 px-5 fs-4'>Event Mangment  </p>  */}
                <a href="https://www.facebook.com" className='text-light p-5'><span className='py-3 fs-3 '><i className="bi bi-facebook text-primary"></i></span></a>
                <a href="https://www.google.com" className='text-light p-5 '><span className='py-3 fs-3'><i className="bi bi-bi bi-youtube text-danger dispay-1"></i></span></a>
                <a href="https://www.twitter.com" className='text-light p-5 '><span className='py-3 fs-3'><i className="bi bi-twitter text-info dispay-1"></i></span></a>
               <div>________________________________________________ </div> 
               <p className='text-center my-0 mx-5 px-5 fs-6'>Copyright &copy; 2022.All rights reversed  </p> 


        </div>
    )
}

export default Footer;
