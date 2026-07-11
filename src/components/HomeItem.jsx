const HomeItem = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={item.item_name} />

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>

      <div className="company-name">{item.company}</div>

      <div className="item-name">{item.item_name}</div>

      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>

        <span className="original-price">Rs {item.original_price}</span>

        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      <button className="btn-add-bag" onClick={() => console.log("Add to Bag")}>
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;
