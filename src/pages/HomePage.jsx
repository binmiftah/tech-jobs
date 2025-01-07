import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title='Do you need tech jobs?' subtitle='Browse through and find the right software jobs that suits you right here!' />
      <HomeCards />
      <JobsListing isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage