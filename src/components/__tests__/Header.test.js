import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("Header component contains login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button", { name: "Login" });
  expect(btn).toBeInTheDocument;
});

it("Cart is present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument;
});

it("Header component render testing", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginbtn);

  const logoutbtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutbtn).toBeInTheDocument;
});
