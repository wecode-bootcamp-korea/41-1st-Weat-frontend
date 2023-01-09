import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Items({ itemList }) {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate('/Category/detail');
  };

  return (
    <div key={itemList.id}>
      <li>
        <Link to={`/Category/Detail/${itemList.id}`}>
          <img src={itemList.thumbnail_image} alt="thumbnail" />
        </Link>
        <button className="cart" onClick={moveToDetail}>
          <BsCart3 />
        </button>
      </li>
      <p>{itemList.name}</p>
      <p className="priceWeight">
        기준가 {parseInt(itemList.price)}원/{itemList.base_unit}
      </p>
    </div>
  );
}

export default Items;
