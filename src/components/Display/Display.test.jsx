import { render, screen } from "@testing-library/react";
import Display from "./Display";

it("should render Display component", () => {
    const { container } = render(
        <Display
        judgementArr={["ewww", "blah", "ugh"]}
        />
    );
    screen.debug();
    expect(container).toMatchSnapshot();
});
