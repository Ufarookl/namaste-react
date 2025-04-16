import { RES_LOGO_URL, STAR_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { ResData } = props;
  //console.log("props - ", props);

  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    ResData;

  return (
    <div className="m-2 p-2 w-[280px] h-105 wrap-break-word bg-gray-200 hover:bg-gray-400 rounded-lg">
      <img
        className="rounded-lg h-60 w-full"
        alt="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
      <div className="flex justify-between px-2 py-2">
        <h4 className="flex">
          {avgRating}
          <img className="h-6 w-6 mx-1" src={STAR_IMG_URL} alt="star"></img>
        </h4>

        <h4>{sla?.slaString}</h4>
      </div>
      <div>
        <h4 className="px-2 truncate">{cuisines.join(",")}</h4>
      </div>
      <div>
        <h3 className="py-2 px-2">{costForTwo}</h3>
      </div>
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
