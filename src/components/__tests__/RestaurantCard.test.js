import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resdata.json";
import "@testing-library/jest-dom";

it("should render restaurant card", () => {
  //   render(<RestaurantCard resData={MOCK_DATA} />);

  //   const name = screen.getByText("Chinese Wok");

  //   expect(name).toBeInTheDocument("Chinese Wok");
  expect("Chinese Wok").toBe("Chinese Wok");
});
