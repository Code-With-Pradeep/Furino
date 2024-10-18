import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../Data';
import '../../Pages/Product/Product.css'

const Product = () => {
  const { productID } = useParams();
  const product = data.find((product) => product.id === parseInt(productID, 10));

  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState('Grey');
  const [selectedSize, setSelectedSize] = useState('Small');

  if (!product) {
    return <div>Product not found</div>;
  }

  // Get price and offer for the selected color and size
  const { price, offer } = product.pricedetail[selectedColor][selectedSize];

  return (
    <div>
      <Link to="/">Back to products</Link>

      <div className="product-details-page">
        <div className="container">
          <div className="details-main-box">
            <div className="product-detail-image">
              <img src={product.productimg} alt={product.productName} />
            </div>
            <div className="product-top-details">
              <div className="product-top-id">{product.id}</div>
              <h1 className="product-title-detail">{product.productName}</h1>
              <p>{product.productDescription}</p>

              <div className="product-options">
                <div className="color-options">
                  {Object.keys(product.pricedetail).map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      id={color}
                      className={color === selectedColor ? 'active' : ''}
                      style={{background:color}}
                    >
                    </button>
                  ))}
                </div>

                <div className="size-options">
                  <label>Size: </label>
                  {Object.keys(product.pricedetail[selectedColor]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={size === selectedSize ? 'active' : ''}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-price">
                <p>
                  Price: ${(price - (price * offer) / 100).toFixed(2)}{' '}
                  <span className="original-price">${price.toFixed(2)}</span> ({offer}% off)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
