import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const categories = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId + index}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
