import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { ResData } = props;

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = ResData?.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} for Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
