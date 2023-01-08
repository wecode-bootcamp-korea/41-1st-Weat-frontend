import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Items({ itemList }) {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate('/Category/Detail');
  };
  return itemList.map(items => (
    <div key={items.id}>
      <li>
        <button className="imgButton" onClick={moveToDetail}>
          <img src={items.thumbnail_image} />
        </button>
        <button className="cart" onClick={moveToDetail}>
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
