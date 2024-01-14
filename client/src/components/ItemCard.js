import React from 'react'

const ItemCard = ({image, name, price, description}) => {
  return (
    <div id="item-card">
      <img id="item-image" src={image} alt={name} />
      <h2>Title: {name}</h2>
      <p>Price: {price}</p>
      <p>Description:{description}</p>
    </div>
  )
}

export default ItemCard