import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import dollar from '../../assets/Icons/dollar2.png'
import Job from '../../assets/Icons/job.png'
import mail from '../../assets/Icons/mail.png'
import location2 from '../../assets/Icons/location2.png'
import { addToDb } from '../../utilities/fakedb';

const JobDetils = () => {
    const { jobId } = useParams();
    const job = useLoaderData()
    const selectedItem = job.find((item) => item.id === jobId);

    const { id, company_logo, company_name, job_title, remote_or_onsite,
        location, fulltime_part_time, salary, job_description, job_responsibility,
        educational_requirements, experiences, contact_information_email
    } = selectedItem;

    // console.log(company_name);

    const addToLocalStorageSelectedJob = (id) =>{
        // console.log(id);
        addToDb(id)
    }

    return (
        <div className='container mx-auto'>
            {/* Title start  */}
            <h1 className='text-7xl font-bold text-center py-5'>Job Details</h1>
            {/* Title end */}
            <div className='flex justify-between  gap-7 pt-10'>

                <div >
                    {/* left side Start  */}
                    <h1><span className='text-lg font-bold leading-relaxed'>Job Description: </span>{job_description}</h1>
                    <h1 className='py-5'><span className='text-lg font-bold leading-relaxed'> Job Responsibility: </span>{job_responsibility}</h1>

                    <h1 className='py-2'><span className='text-lg font-bold leading-relaxed'>Educational Requirements: </span> <br />{educational_requirements}</h1>
                    <h1><span className='text-lg font-bold leading-relaxed'>Experiences :</span> <br />{experiences} Years in this field.</h1>
                    {/* left side end */}
                </div>

                <div className='w-8/12'>
                    {/* Right side Start  */}

                    <div>
                        {/* Job Details */}
                        <div>
                            <h1 className='text-xl font-medium pb-2'>Job Details</h1>
                            <hr />

                            {/* sallary and job title start  */}
                            <div className='py-5'>
                                <div>
                                    <h1 className='inline-flex gap-2'><img src={dollar} alt="Dollar" /> <span className='text-lg font-normal'>Salary :</span> {salary} (Per Month)</h1>
                                    <div>
                                        <h1 className='inline-flex gap-2'><img src={Job} alt="Dollar" /> <span className='text-lg font-normal'> Job Title :</span> {job_title} </h1>
                                    </div>
                                </div>
                            </div>
                            {/* sallary and job title end  */}
                        </div>

                        {/* Contact Information */}
                        <div>

                            <h1 className='text-xl font-medium pb-2'>Contact Information</h1>
                            <hr />

                            {/* sallary and job title start  */}
                            <div className='py-5'>
                                <div>
                                    <h1 className='inline-flex gap-2'><img src={mail} alt="Dollar" />
                                    <span className='text-lg font-normal'> Email : </span>  {contact_information_email} </h1>
                                    <div>
                                        <h1 className='inline-flex gap-2'><img src={location2} alt="Dollar" />
                                        <span className='text-lg font-normal'> Address : </span>  {location} </h1>
                                    </div>
                                </div>
                            </div>
                            {/* sallary and job title end  */}
                        </div>

                        <div className='text-center'>
                            <button onClick={()=>addToLocalStorageSelectedJob(id)} className="btn common_btn text-2xl  font-bold  text-white border-0 w-6/12">Apply Now</button>
                        </div>
                    </div>

                    {/* Right side end */}
                </div>
            </div>

        </div>
    );
};

export default JobDetils;