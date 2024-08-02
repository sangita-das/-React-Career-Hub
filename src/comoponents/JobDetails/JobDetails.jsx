import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log( job);

    const handleApplyJob = () => {
        saveJobApplication (idInt);
        toast('You have applied successfully')
    }



    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
            <div className="border md:col-span-3">
                <h2 className="text-4xl">Details Coming Here.....</h2>
                <p>{job.company_name}</p>
                <h2>Job Details of: {job.job_title} </h2>
            </div>
            <div className="border ">
                <div className="text-2xl">
                    Side things
                </div>
                <button onClick={handleApplyJob} className="btn btn-primary w-full">Appy Now</button>
            </div>

             <ToastContainer />

            </div>
        </div>
    );
};

export default JobDetails;