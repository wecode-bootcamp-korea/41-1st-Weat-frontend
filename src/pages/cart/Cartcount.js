const Cartcount = ({ value, onRemove, plusCount, minusCount }) => {
  return (
    <tbody>
      <tr className="itemList">
        <th className="itemImg">
          <img className="imgSize" src={value.img} alt="meat" />
        </th>
        <th className="itemName">
          <p>{value.name}</p>
          <span className="itemOption"> {value.option}</span>
        </th>
        <th className="itemWeight">{value.weight * value.count}g 기준</th>
        <th className="itemCount">
          <button className="clickMinusButton" onClick={minusCount}>
            -
          </button>
          {value.count}
          <button className="clickPlusButton" onClick={plusCount}>
            +
          </button>
        </th>
        <th className="itemPrice">
          {(value.price * value.count).toLocaleString()}원
        </th>
        <th className="itemRemove">
          <button
            onClick={() => {
              onRemove(value.id);
            }}
            className="itemRemoveButton"
          >
            x
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Cartcount;
