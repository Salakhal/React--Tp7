import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre principal', () => {
  render(<App />);
  expect(screen.getByText('TP7 - React Avance')).toBeInTheDocument();
});

test('affiche la section JSX', () => {
  render(<App />);
  expect(screen.getByText('JSX en action')).toBeInTheDocument();
});

test('affiche le bouton du HOC', () => {
  render(<App />);
  expect(screen.getByText('Cliquez ici')).toBeInTheDocument();
});

test('affiche la section Render Props', () => {
  render(<App />);
  expect(screen.getByText('Render Props')).toBeInTheDocument();
});

test('affiche le compteur', () => {
  render(<App />);
  expect(screen.getByText('Compteur avec test')).toBeInTheDocument();
});