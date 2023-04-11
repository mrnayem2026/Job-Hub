import React from 'react';

const JobCard = ({job}) => {
    const {id,category_name,category_logo,jobs_available} = job;
    return (
        <>
            <div className='bg-purple-100 pl-10 pr-20 py-10 rounded-lg'>
                <img src={category_logo} alt="Cetegory logo" className='bg-purple-200 p-3  rounded-md' />
                <p className='text-xl font-normal py-1'>{category_name}</p>
                <p className='text-sm text-gray-500'>{jobs_available} Jobs Available</p>
            </div>
        </>
    );
};

export default JobCard;