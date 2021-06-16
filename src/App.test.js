import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { replaceCamelWithSpaces } from './App';
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button color should change when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('button starts enabled, and the checkbox starts disabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkBox).not.toBeChecked();
});

test('after checkbox is checked, button should be disabled, and then clicked again, button should be enabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  userEvent.click(checkBox);
  expect(colorButton).not.toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  userEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capial letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
