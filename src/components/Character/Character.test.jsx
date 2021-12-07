import { screen, render } from "@testing-library/react";
import Character from "./Character";

it("should render character", async () => {
    const { container } = render(
        <Character top="church" middle="wrinkles" bottom="cat" />
    );
    const element = await screen.findAllByRole("article");

    expect(element[0]).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
