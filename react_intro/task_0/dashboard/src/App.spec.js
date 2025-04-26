import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("test of App component", () => {
    test("testing the h1 element", () => {
        render(<App />);
        const header = screen.getByRole("heading", { name: /School dashboard/i });
        expect(header).toBeInTheDocument();
    });

    test("testing the first p element", () => {
        render(<App />);
        const paragraph = screen.getByText(/Login to access the full dashboard/i);
        expect(paragraph).toBeInTheDocument();
    });

    test("testing the second p element", () => {
        render(<App />);
        const paragraph = screen.getByText(/Copyright 2024 - holberton School/i);
        expect(paragraph).toBeInTheDocument();
    });

    test("testing the image element", () => {
        render(<App />);
        const image = screen.getByAltText(/holberton logo/i);
        expect(image).toBeInTheDocument();
    });
});