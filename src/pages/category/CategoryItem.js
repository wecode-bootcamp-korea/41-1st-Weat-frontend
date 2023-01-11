import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const CategoryItem = ({ id, name, price, thumbnail_image }) => {
  const [isPopup, setIsPopup] = useState(false);

  const onPopup = () => {
    setIsPopup(!isPopup);
  };
  return (
    <li className="itemList">
      {isPopup && <Popup onPopup={onPopup} id={id} name={name} price={price} />}
      <div className="items">
        <Link to={`/Category/Detail/${id}`}>
          <img src={thumbnail_image} alt="고기사진" />
        </Link>
        <button className="cartBtn" onClick={onPopup}>
          <BsCart3 />
        </button>
      </div>
      <div>
        <p className="itemName">{name}</p>
        <p className="itemPrice">{price}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
