const ItemCountCart = ({ cant, onAdd, onRemove }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <button onClick={onRemove} className="btn btn_item_count">
            -
          </button>
        </div>
        <div className="col">
          <h3>{cant}</h3>
        </div>
        <div className="col">
          <button onClick={onAdd} className="btn btn_item_count">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCountCart;
