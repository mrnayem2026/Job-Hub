import React from 'react';

const FeturedJobCard = ({ oneJobCard }) => {
    const { id, company_logo, company_name, job_title, remote_or_onsite,
        location, fulltime_part_time, salary, job_description, job_responsibility,
        educational_requirements,experiences,contact_information_email
            } = oneJobCard;
    return (
        <div>
            I am from FeturedJOB Card.  {}
            <img src={company_logo} alt="" />
        </div>
    );
};

export default FeturedJobCard;