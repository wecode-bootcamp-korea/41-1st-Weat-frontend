import React, { useState } from 'react';
import Popup from './Popup';

import { BsCart3 } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const CategoryList = ({ id, name, price }) => {
  const [isPopup, setIsPopup] = useState(false);

  const onPopup = () => {
    isPopup ? setIsPopup(false) : setIsPopup(true);
  };
  return (
    <li className="itemList">
      {isPopup && <Popup onPopup={onPopup} id={id} name={name} price={price} />}
      <div className="items">
        <Link to={`/Category/Detail/${id}`}>
          <img src="/images/meat.jpg" alt="고기사진" />
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

export default CategoryList;
