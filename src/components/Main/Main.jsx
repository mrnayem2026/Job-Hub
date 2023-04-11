import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeturedJob from '../FeturedJob/FeturedJob';

const Main = () => {
    return (
        <>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeturedJob></FeturedJob>
        </>
    );
};

export default Main;