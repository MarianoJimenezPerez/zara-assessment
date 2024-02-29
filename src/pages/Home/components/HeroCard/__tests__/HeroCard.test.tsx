import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import { Thumbnail } from "@/types";
import HeroCard from "../HeroCard";
import { HeroContextProvider } from "@/context/HeroesContext";
import { BrowserRouter } from "react-router-dom";

describe("<HeroCard />", () => {
  afterEach(cleanup);

  it("Should render a <HeroCard /> with 'My hero name' name", () => {
    const sampleThumbnail: Thumbnail = { path: "ds", extension: "ds" };
    render(
      <BrowserRouter>
        <HeroContextProvider>
          <HeroCard id={1} name="My hero name" thumbnail={sampleThumbnail} />
        </HeroContextProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("My hero name")).toBeDefined();
  });
});
