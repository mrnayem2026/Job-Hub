import React, { useEffect, useState } from 'react';
import FeturedJobCard from '../FeturedJobCard/FeturedJobCard';

const FeturedJob = () => {
    const [fetureJob, setFetureJob] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetureJobFetchData = async () => {
            const res = await fetch('featuredJobs.json');
            const data = await res.json()
            setFetureJob(data);
        }
        fetureJobFetchData()
    }, [])

    return (
        <div className='container mx-auto'>
            {/* Fetured Job Title Start  */}
            <div className='text-center mt-36 mb-8'>
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='text-lg text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Fetured Job Title end  */}

            {/* Fetured Job Card display Start  */}
            <div className='gird grid-cols-12'>
                {
                    fetureJob?.slice(0 , showAll ? 6 : 4 ).map((oneJobCard)=> <FeturedJobCard key={oneJobCard.id} oneJobCard={oneJobCard}></FeturedJobCard>)
                }

                <div className='text-center'>
                <button className="btn common_btn text-2xl  font-bold  text-white border-0" onClick={()=>setShowAll(true)}>See All Jobs</button>
                </div>
            </div>
            {/* Fetured Job Card display end  */}

        </div>
    );
};

export default FeturedJob;