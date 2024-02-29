import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import ComicCard from "../ComicCard";
import { Thumbnail } from "@/types";

describe("<ComicCard />", () => {
  afterEach(cleanup);

  it("Should render a <ComicCard /> with 'test comic' name", () => {
    const sampleThumbnail: Thumbnail = { path: "ds", extension: "ds" };
    render(<ComicCard thumbnail={sampleThumbnail} name="test comic" />);
    expect(screen.getByText("test comic")).toBeDefined();
  });
});
