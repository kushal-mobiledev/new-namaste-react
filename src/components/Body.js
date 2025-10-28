import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard
          resName="Meghana Foods"
          ratings="4.4"
          eta="38"
          cuisine="Asian, North Indian"
          imgURL="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"
        />
        <RestaurantCard
          resName="KFC"
          ratings="4.6"
          eta="25"
          cuisine="Fast Food"
          imgURL="https://images.ctfassets.net/wtodlh47qxpt/wAKmOMcpTm0yfspLrl20B/a49799960b22ba96b733f54971d96825/KFC-category-EPIC-Bucket-1_All-in-one-bucket-delivery_-28th-JAN_1.jpg"
        />
      </div>
    </div>
  );
};

export default Body;
