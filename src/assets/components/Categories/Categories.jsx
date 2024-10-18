import React from 'react'
import {Link} from 'react-router-dom'
import '../../components/Categories/Categories.css'

const Categories = () => {
    const categories = [
        {
            id:1,
            categories:'Living Room',
            cimg:'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg'
        },
        {
            id:2,
            categories:'Bed Room',
            cimg:'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            categories:'Dining Room',
            cimg:'https://images.pexels.com/photos/4050423/pexels-photo-4050423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
  return (
    <div className="categories">
        <div className='container'>
            <h3 className='heading text-center'>Elevate Every Room</h3>
            <h4 className="tagline text-center">Discover exquisite furniture for your living room, bedroom, and dining area.</h4>

            <div className="categories-block">
                {
                    categories.map(cat =>
                        <div className="cat-box" key={cat.id}>
                            <Link to=''>
                                <div className="cat-img">
                                    <img src={cat.cimg} alt={cat.categories}/>
                                </div>
                                <h5>{cat.categories}</h5>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Categories