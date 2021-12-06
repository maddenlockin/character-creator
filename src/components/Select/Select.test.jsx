import { render, screen } from "@testing-library/react";
import Select from "./Select";

it("should render select component", () => {
    const { container } = render(<Select />);
    const selectTop = screen.getByLabelText(/Top/);
    const selectMiddle = screen.getByLabelText(/Middle/);
    const selectBottom = screen.getByLabelText(/Bottom/);
    const input = screen.getByLabelText(/Judgements/);

    expect(selectTop).toBeInTheDocument();
    expect(selectMiddle).toBeInTheDocument();
    expect(selectBottom).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
