import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const JobCategory = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        const jobFetch = async () => {
            const res = await fetch('jobCategoryList.json');
            const data = await res.json();
            setJobs(data);
        }
        jobFetch()
    },[])


    return (
        <div className='container mx-auto'>
            {/* Job Title Start  */}
            <div className='text-center mt-36 mb-8'>
                <h1 className='text-4xl font-bold'>Job Category List</h1>
                <p className='text-lg text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
             {/* Job Title end  */}

             {/* Job Card Start  */}
            <div className='mb-5 lg:mb-36  flex flex-col lg:flex-row justify-between'>
            {
                jobs.map((job)=> <JobCard key={job.id} job={job}></JobCard>)
             }
            </div>
             {/* Job Card End */}
        </div>
    );
};

export default JobCategory;