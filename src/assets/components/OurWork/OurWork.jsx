import React from 'react'
import '../OurWork/OurWork.css'
import share from '../../Image/Share.png'

const OurWork = () => {
  return (
    <div className='Ourwork'>
        <div className="container">
            <h4 className='tagline text-center'>Share your setup with</h4>
            <h3 className='heading text-center'>#FuniroFurniture</h3>
        </div>
        <div className="grid-image">
            <img src={share} alt='ourwork'/>
        </div>
    </div>
  )
}

export default OurWork