import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { ResData } = props;

  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    ResData?.info;

  return (
    <div className="m-4 p-4 w-[280px] wrap-break-word bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
