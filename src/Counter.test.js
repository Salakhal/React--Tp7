import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrémente le compteur au clic', () => {
  render(<Counter />);
  const button = screen.getByText('Incrémenter');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});