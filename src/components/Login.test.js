import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

test("username should be rendered", () => {
    render(<Login />);
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toBeInTheDocument();
});

test("password should be rendered", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
});

test("button should be rendered", () => {
    render(<Login />);
    const buttonText = screen.getByText(/Login/i);
    expect(buttonText).toBeInTheDocument();
});

test("username input should be empty", () => {
    render(<Login />);
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput.value).toBe("");
});

test("password input should be empty", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput.value).toBe("");
});

test("button should be disabled", () => {
    render(<Login />);
    const buttonEl = screen.getByText(/Login/i);
    expect(buttonEl).toBeDisabled();
});

test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
});

test("username should be changed", () => {
    render(<Login />);
    const userValueInput = screen.getByPlaceholderText(/username/i);
    const testValue = "test";
    fireEvent.change(userValueInput, { target: { value: testValue } });
    expect(userValueInput.value).toBe(testValue);
});

test("password should be changed", () => {
    render(<Login />);
    const passwordValueInput = screen.getByPlaceholderText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordValueInput, { target: { value: testValue } });
    expect(passwordValueInput.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
    render(<Login />);
    const buttonEl = screen.getByText(/Login/i);

    const userValueInput = screen.getByPlaceholderText(/username/i);
    const passwordValueInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(userValueInput, { target: { value: testValue } });
    fireEvent.change(passwordValueInput, { target: { value: testValue } });
    expect(buttonEl).not.toBeDisabled();
});