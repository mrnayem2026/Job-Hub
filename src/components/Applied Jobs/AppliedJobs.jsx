import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from '../Applied Jobs Card/AppliedJobsCard';

const AppliedJobs = () => {
    const jobsCart = useLoaderData();
    const [job, setJob] = useState(jobsCart);
    // console.log(job);
    return (
        <div>
            <h1 className='text-center text-8xl font-bold py-14'>Applied Jobs</h1>
                {
                    job.map((job) => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                }
        </div>
    );
};

export default AppliedJobs;