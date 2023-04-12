import React from 'react';
import Location from "../../assets/Icons/location1.png"
import Dollar from "../../assets/Icons/doller1.png"
import { useNavigate } from "react-router-dom";

const FeturedJobCard = ({ oneJobCard }) => {
    const { id, company_logo, company_name, job_title, remote_or_onsite,
        location, fulltime_part_time, salary, job_description, job_responsibility,
        educational_requirements, experiences, contact_information_email
    } = oneJobCard;
    // console.log(id);
    const navigate = useNavigate()
    return (
        <div className='py-10 pl-10 rounded-lg border-solid border-2 border-gray-500-500'>
            {/* logo start  */}
            <img src={company_logo} alt="companyLogo" className='object-cover' />
            {/* logo end */}

            {/* Job title Start  */}
            <div className='pt-8 pb-4'>
                <h1 className='text-3xl font-bold'>{job_title}</h1>
                <p className='text-lg text-gray-500'>{company_name}</p>
            </div>
            {/* Job title end */}

            {/* remote fulltime start  */}
            <div className='flex gap-4'>
                <button className='btn btn-outline btn-info rounded-lg'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-info rounded-lg'>{fulltime_part_time}</button>
            </div>
            {/* remote fulltime end  */}

            {/* location  */}
            <div className='pt-4 pb-6 flex gap-12'>
                <div className='inline-flex gap-1'><img src={Location} alt="Location icon" /> {location} </div>
                <div className='inline-flex gap-1'><img src={Dollar} alt="Dollar icon" /> Salary : {salary} </div>
            </div>
            {/* location  */}

            {/* button start  */}
           
                <button onClick={()=>navigate(`job/${id}`)} className="btn common_btn text-2xl  font-bold  text-white border-0">View Details</button>
            
            {/* button end  */}
        </div>
    );
};

export default FeturedJobCard;