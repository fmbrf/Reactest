import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reacftest input', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/reacftest/i);
  expect(inputElement).toBeInTheDocument();
});
