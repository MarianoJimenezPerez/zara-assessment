import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import { HeroContextProvider } from "@/context/HeroesContext";
import BasicLayout from "@/layout/BasicLayout";

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeroContextProvider>
          <BasicLayout />
          <Home />
        </HeroContextProvider>
      </BrowserRouter>
    );
  });
  afterEach(cleanup);

  it("Should render a loading state and 0 results while loading", () => {
    expect(screen.getByText("0 results")).toBeDefined();
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("Favorites heroes should be hidden on first render and visible on heart icon click", () => {
    const favButton = screen.getByTestId("vitest-button-fav");
    expect(favButton).toBeDefined();

    fireEvent.click(favButton);
    expect(screen.getByText("Favorites")).toBeDefined();
  });

  it("Should appear hero list on data response", async () => {
    await waitFor(() => {
      const heroList = screen.getByTestId("vitest-hero-list");
      expect(heroList).toBeDefined();
    });
  });
});
