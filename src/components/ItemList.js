import React from "react";
import { RES_LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id + item.card.info.category}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span>{item.card.info.name} - </span>
            <span>
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
            <p className="text-xs my-2 text-gray-400">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="w-16 p-2 mx-13 my-23 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={RES_LOGO_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
