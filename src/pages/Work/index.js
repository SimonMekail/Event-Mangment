import React  from 'react';

const Work = () => {
    return (
        <section>
        <div className='container-xxl'>
            <div className="row justify-content-center align-items-center">
                    <h1 className='text-center display-6'>Built for any event, any size</h1>
                </div>

                <div className="row justify-content-start align-items-center">
                    <h4 className='col-md-4 text-start display-6 px-5 mx-5'>Virtual Events 
                        <p className='fs-4'>
                        Create an engaging and interactive online experience.
                        </p>
                    </h4>
                    </div>
                <div className="row justify-content-center align-items-center">
                    <h4 className='col-md-4 text-center display-6'>In-Person Events 
                    <p className='fs-4'>
                        Safe and impactful events, of any size. 
                    </p>
                    </h4>
                    </div>
                <div className="row justify-content-end align-items-center">
                    <h4 className='col-md-4 text-end display-6 px-5 mx-5'>Hybrid Events 
                    <p className='fs-4'>
                        All the tools you need to create one event, two experiences.
                    </p>
                    </h4>
            </div>
            </div>
            

        
        </section>
    )
}

export default Work;