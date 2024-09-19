import { render, screen } from '@testing-library/react'; // screen respresents the whole document which we have rendered.
import App from './App';

test('renders hello react text', () => {
  render(<App />); // first we should render a component.
  const elementText = screen.getByText(/Hello World/i); //second we should access a specific html element by its text or role or data_testid etc. We write the text in this /../i format because in this it remains case insensitive. So, if there will be change in cases it would still expect this true.
  expect(elementText).toBeInTheDocument(); //
});

test('renders 3 list items', () => {
  render(<App />); 
  const listItems = screen.getAllByRole("listitem");
  //expect(listItems).toHaveLength(3);
  //Or
  //expect(listItems.length).toBe(3);
  //Or
  expect(listItems.length).toEqual(3); // These three were RTL methods. Similarly we have jest methods.
});

test('renders hello text', () => {
  render(<App />);
  const elementText2 = screen.getByText(/Hey/i);  
  expect(elementText2).toBeInTheDocument(); //
});

test('renders sum of two elements', () => {
  render(<App />); 
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("52");
});
