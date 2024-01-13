import React from 'react'

const ItemCard = ({image, name, price, description}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  )
}

export default ItemCard