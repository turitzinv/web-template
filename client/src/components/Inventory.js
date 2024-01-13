import React from "react";

const Inventory = ({ fullItemList }) => {
  return (
    <div>
      <h1 id="inventory-title">Inventory</h1>
      {fullItemList}
    </div>
  );
};

//search bar
//card previews, need SEEDED data to work with
//Inventory Tab that is all cards. Name, price, click to see details

export default Inventory;
