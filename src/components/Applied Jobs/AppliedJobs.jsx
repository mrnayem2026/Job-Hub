import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobsCart = useLoaderData();
    // const [job,setJob] = useState(jobsCart);
    // console.log(job);
    return (
        <div>
            I am form Applied Jobs
        </div>
    );
};

export default AppliedJobs;