import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import EditJobPage from './pages/EditJobPage'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'




const App = () => {
   // Add new job
   const addJob = async (newJob) => {
      const res = await fetch('/api/jobs', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newJob)
      });
      return;
   }

   //Delete job
   const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
         method: 'DELETE'
      })
   }
   // Update Job
   const updateJob = async (job) => {
      const res = await  fetch(`/api/jobs/${job.id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(job)
      });
      return;
   }

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
            <Route path='/job/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
            <Route path='*' element={<NotFoundPage />} />
         </Route>
      )
   )

   return (<RouterProvider router={router} />)
}

export default App

{/* // import React from 'react'
// const name = 'Abdullah'
// const names = ['John', 'Jane', 'Calvin', 'Magret']
// const x = 15
// const y = 25
// const loggedIn = false

// const App = () => {
//   return (
//     <>
//       <div classNameName='text-5xl'>App</div>
//       <p>My name is {name}</p>
//       <p>{x} plus {y} equals {x + y}</p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       {loggedIn && <h1>Hello {name}</h1>}
//     </>
//   )
// }

// export default App */}