import { GET_RESTAURANTS_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import axios from "axios";

const useRestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await axios.get(GET_RESTAURANTS_URL);

    setListofRestaurants(
      response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListofRestaurants(
      response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListofRestaurants((prev) => [...prev, ...restaurantList]);
    setFilteredListofRestaurants((prev) => [...prev, ...restaurantList]);
  };
  return [listofRestaurants, filteredListofRestaurants];
};

export default useRestaurantList;
