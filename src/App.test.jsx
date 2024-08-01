import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Collection link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Collections/i);
  expect(linkElement).toBeInTheDocument();
});