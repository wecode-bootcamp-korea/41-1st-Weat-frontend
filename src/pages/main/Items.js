import React, { useState, useEffect } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Items({ itemList }) {
  const navigate = useNavigate();
  const params = useParams();
  const itemId = params.id;
  const [item, setItem] = useState({});
  const { thumbnail_image, name, price, id, base_unit } = item;

  useEffect(() => {
    fetch(`http://10.58.52.126:3000/products/detail/
    ${itemId}`)
      .then(result => result.json())
      .then(data => setItem(data));
  }, [itemId]);

  const moveToDetail = () => {
    navigate(`/Category/detail/${itemId}`);
  };

  return itemList.map(items => (
    <div key={items.id}>
      <li>
        <Link to={`/Category/Detail/${items.id}`}>
          <img src={items.thumbnail_image} alt="thumbnail" />
        </Link>
        <button className="cart" onClick={moveToDetail}>
          <BsCart3 />
        </button>
      </li>
      <p>{items.name}</p>
      <p className="priceWeight">
        기준가 {parseInt(items.price)}원/{items.base_unit}
      </p>
    </div>
  ));
}

export default Items;
