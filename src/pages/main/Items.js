import React from 'react';
import { BsCart3 } from 'react-icons/bs';

function Items({ itemList }) {
  return itemList.map(items => (
    <div key={items.id}>
      <li>
        <img src={items.thumbnail_image} />
        <button className="cart">
          <BsCart3 />
        </button>
      </li>
      <p>{items.name}</p>
      <p className="priceWeight">
        기준가 {items.price}원/{items.base_unit}
      </p>
    </div>
  ));
}

export default Items;
