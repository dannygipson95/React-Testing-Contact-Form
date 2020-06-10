import React from "react";
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />); 
});

test("form adds new user", async ()=>{
  await act(async() => {
    render(<ContactForm/>);
  const firstNameInput = screen.getByLabelText(/first name*/i);
  const lastNameInput = screen.getByLabelText(/first name*/i);
  const emailInput = screen.getByLabelText(/first name*/i);
  const messageInput = screen.getByLabelText(/first name*/i);
  // labels did not have "for" value associated with them upon testing
  // added labels to continue
  
  fireEvent.change(firstNameInput, {target: {value: 'Daniel'}});
  fireEvent.change(lastNameInput, {target: {value: 'Gipson'}});
  fireEvent.change(emailInput, {target: {value: 'dannygipson@gmail.com'}});
  fireEvent.change(messageInput, {target: {value: 'stuff and things'}});

  const submitButton = screen.getByTestId(/submit/i);
  fireEvent.click(submitButton);

  const newUser = screen.getByText(/"firstname": "daniel"/i)
  expect(newUser).toBeInTheDocument();
  })
})
