import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Item({ item }) {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate('/Category/detail');
  };

  return (
    <div>
      <li>
        <Link to={`/Category/Detail/${item.id}`}>
          <img src={item.thumbnail_image} alt="thumbnail" />
        </Link>
        <button className="cart" onClick={moveToDetail}>
          <BsCart3 />
        </button>
      </li>
      <p>{item.name}</p>
      <p className="priceWeight">
        기준가 {parseInt(item.price)}원/{item.base_unit}
      </p>
    </div>
  );
}

export default Item;
