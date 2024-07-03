import { render, screen } from '@testing-library/react';
import tictactoe from './tictactoe';

test('renders learn react link', () => {
  render(<tictactoe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
