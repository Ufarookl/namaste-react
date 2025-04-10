import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { GET_RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await fetch(GET_RESTAURANTS_URL);

      const json = await data.json();
      setListofRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListofRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

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
            className="border border-solid border-black"
            value={searchText}
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
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="m-2 p-2 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListofRestaurants.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard ResData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
