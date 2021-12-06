import { render } from "@testing-library/react";
import Display from "./Display";

it("should render Display component", () => {
    const { container } = render(
        <Display
        judgements={["ewww", "blah", "ugh"]}
        />
    );
    expect(container).toMatchSnapshot();
});
