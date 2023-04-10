import React from 'react';
import person from '../../assets/all_image/person.png';

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-0 '>
            <div className=' mt-8 lg:my-auto'>
                <h1 className='text-2xl font-medium lg:text-8xl lg:font-bold leading-tight'>One Step <br /> Closer To Your <br />  <span className='text-gridien'>Dream Job</span> </h1>
                <p className='my-7 text-lg'>Explore thousands of job opportunities with all the <br />
                 information you need. Its your future. Come find it. Manage all <br />
                  your job application from start to finish.</p>
                  <button className="btn common_btn text-2xl  font-bold  text-white border-0">Get Started</button>
            </div>
            <div>
                <img src={person} alt="Person" />
            </div>
        </div>
    );
};

export default Banner;