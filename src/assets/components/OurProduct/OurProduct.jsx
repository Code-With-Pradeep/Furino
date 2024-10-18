import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../../Data'
import '../OurProduct/OurProduct.css';

const OurProduct = () => {
  return (
    <div>
        <div className="container">
            <h3 className="heading text-center">Our Products</h3>
            
            <div className="product-area">
                {
                    data.map((data) =>{
                        
                        return(
                            <Link key={data.id} to={`/product/${data.id}`}>
                                <div className="product-cards" >
                                    <div className="product-card-img">
                                        <img src={data.productimg} alt={data.productName}/>
                                    </div>
                                    <div className="product-card-details">
                                        <h6>{data.productName}</h6>
                                        <p>{data.brandName}</p>

                                        <div className="prize">
                                        {data.pricedetail.Grey.Small.price}
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                

            </div>
        </div>
    </div>
  )
}

export default OurProduct