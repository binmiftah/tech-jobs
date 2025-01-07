import React from "react";
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobsListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/src/api/jobs.json" : "/src/api/jobs.json";
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Log the data to see its structure
      //   console.log("Fetched data:", data);

        // Check if data is nested under a property
        const jobsArray = Array.isArray(data) ? data : data.jobs; 
        const limitedJobs = isHome ? jobsArray.slice(0, 3) : jobsArray;
        setJobs(limitedJobs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setJobs([]); 
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.isArray(jobs) &&
              jobs.map((job) => <JobListing key={job.id} job={job} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListing;
