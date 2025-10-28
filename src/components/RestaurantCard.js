const styleCard = {
  backgroundColor: "#F0F0F0",
};

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="restaurant-logo" src={props.imgURL} />
      <div className="res-name-container">
        <h3>{props.resName}</h3>
        <h4>{props.ratings} ⭐</h4>
      </div>

      <h4>{props.cuisine}</h4>
      <h4>{props.eta} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
