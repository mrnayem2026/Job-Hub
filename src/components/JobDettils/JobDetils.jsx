import React from 'react';
import { useParams,useLoaderData } from 'react-router-dom';

const JobDetils = () => {
    const { itemId } = useParams();
    // const job = useLoaderData()
    // const selectedItem = job.find((item) => item.id === itemId);
  
    console.log(itemId);
    
    return (
        <div>
            I  am from job detils {itemId}
        </div>
    );
};

export default JobDetils;