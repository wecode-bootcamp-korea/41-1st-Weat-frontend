import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Popup from './Popup';

function Item({ item }) {
  const [isPopup, setIsPopup] = useState(false);

  const onPopup = () => {
    setIsPopup(!isPopup);
  };

  return (
    <div>
      <li className="popupWarp">
        {isPopup && <Popup onPopup={onPopup} item={item} />}
        <div>
          <Link to={`/Category/Detail/${item.id}`}>
            <img src={item.thumbnail_image} alt="thumbnail" />
          </Link>
          <button className="cart" onClick={onPopup}>
            <BsCart3 />
          </button>
        </div>
      </li>
      <p>{item.name}</p>
      <p className="priceWeight">
        기준가 {parseInt(item.price)}원/{item.base_unit}
      </p>
    </div>
  );
}

export default Item;
