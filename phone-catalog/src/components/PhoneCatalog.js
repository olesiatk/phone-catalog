import React from 'react';


export const PhoneCatalog = ({products, showCard}) => { 

  return (
    <ul className="phones">
      {products.map(product => (
        <li className="thumbnail" key={product.id}>
          <a href={`#!/phones/${product.id}`} className="thumb">
            <img alt={product.name} src={product.imageUrl} />
          </a>

          <div className="phones__btn-buy-wrapper">
            <a 
              className="btn btn-success" 
              href="#buy"
              onClick ={()=> showCard(product.id)}
            >
              Show
            </a>
          </div>

          <a href={`#!/phones/${product.id}`}>{product.name}</a>
          <p>
            {product.snippet}
          </p>
        </li>
      ))}
    </ul>
  )
}