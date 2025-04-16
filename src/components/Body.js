import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listofRestaurants, newFilteredList] = useRestaurantList();

  const [filteredListofRestaurants, setFilteredListofRestaurants] =
    useState(null);

  useEffect(() => {
    if (listofRestaurants.length > 0)
      setFilteredListofRestaurants(listofRestaurants);
  }, [listofRestaurants]);

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);

  if (!useOnlineStatus()) {
    return (
      <h1>
        OOPS📛🛜..!!Looks like you are offline. Please check your Internet
        Connection and try again...
      </h1>
    );
  }

  //Conditional Rendering
  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-filter m-[10px] p-[10px]">
          <input
            type="text"
            className="border border-solid border-black h-9 rounded-lg px-4 w-65"
            value={searchText}
            placeholder="Search for restaurants and food"
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredrestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListofRestaurants(filteredrestaurant);
              console.log(searchText.length, searchText);
              if (searchText.length === 1) {
                setFilteredListofRestaurants(listofRestaurants);
              }
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredrestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListofRestaurants(filteredrestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-2 py-2 bg-green-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListofRestaurants != null &&
          filteredListofRestaurants.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.2 ? (
                <RestaurantPromoted ResData={restaurant?.info} />
              ) : (
                <RestaurantCard ResData={restaurant?.info} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
