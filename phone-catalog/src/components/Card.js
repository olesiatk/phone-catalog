import React from 'react';

export const Card = ({phone, backToCatalog}) => {

  return (
    <div className="thumbnail" >
      <div className="phones__btn-buy-wrapper">
        <a 
          className="btn btn-success" 
          href="."
          onClick ={()=> backToCatalog()}
        >
          Back
        </a>
      </div>

      <a href=".">{phone.name}</a>
      <p>
        Description: {phone.description}
      </p>

      { phone.images.map(image => (
        <img alt={phone.name} src={image}/>
      ))}
    </div>
  )
}
