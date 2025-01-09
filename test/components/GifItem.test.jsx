import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing GifItem Component", () => {
  const title = "Saitama";
  const url = "http://saitama.com/gift";

  test("Match with Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Must Show given URL and ALT ", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();

    //expect(screen.getByRole("img").src).toBe(url);
    //expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Should show the Tittle in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText( title )).toBeTruthy();
  })
});
