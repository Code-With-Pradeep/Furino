import React from 'react'
import '../Copyrights/CopyRights.css'

const CopyRights = () => {
    const yearon = new Date().getFullYear();
  return (
    <div className='copyrights'>
        <p>{yearon } Furino. All rights reverved</p>
    </div>
  )
}

export default CopyRights