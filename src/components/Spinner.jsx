import React from 'react'
import { CircleLoader } from 'react-spinners'
const override = {
   display: 'block',
   margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <CircleLoader color='#4338ca' loading={loading} cssOverride={override} size={50}  />
  )
}

export default Spinner