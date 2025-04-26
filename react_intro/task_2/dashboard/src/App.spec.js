import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("test of App component", () => {
    test("testing the h1 element", () => {
        render(<App />);
        const header = screen.getByRole("heading", { name: "School dashboard" });
        expect(header).toBeInTheDocument();
    });

    test("testing the first p element", () => {
        render(<App />);
        const paragraph = screen.getByText("Login to access the full dashboard");
        expect(paragraph).toBeInTheDocument();
    });

    test("testing the second p element", () => {
        render(<App />);
        const paragraph = screen.getByText(
            "Copyright 2024 - Holberton School main dashboard"
        );
        expect(paragraph).toBeInTheDocument();
    });

    test("testing the image element", () => {
        render(<App />);
        const image = screen.getByAltText("holberton logo");
        expect(image).toBeInTheDocument();
    });

    test("testing the input elements", () => {
        render(<App />);
        const email = screen.getByRole("textbox");
        const password = screen.getByRole("textbox");

        expect(email).toBeInTheDocument(/@.*\.com$/);
        expect(password).toBeInTheDocument(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
        );
    });

    test("testing the label elements", () => {
        render(<App />);
        const emailLabel = screen.getByLabelText("Email:");
        const passLabel = screen.getByLabelText("Password:");

        expect(emailLabel).toHaveAttribute("type", "email");
        expect(passLabel).toHaveAttribute("type", "password");
    });

    test("testing the button", () => {
        render(<App />);
        expect(screen.getByRole("button")).toHaveTextContent("OK");
    });
});