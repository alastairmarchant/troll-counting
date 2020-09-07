import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders "Troll Counting" title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Troll Counting/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders "Convert" button', () => {
  const app = render(<App />);
  const buttonElement = app.getByText('Convert');
  expect(buttonElement).toBeInTheDocument();
});

test('renders "Press convert to see!" text', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Press convert to see!/i);
  expect(titleElement).toBeInTheDocument();
});

test('1 is one', () => {
  const app = render(<App />);
  app.getByText('Convert').click();
  const oneText = app.getByText('one');
  expect(oneText).toBeInTheDocument();
});

test('2 is two', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 2 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('two');
  expect(twoText).toBeInTheDocument();
});

test('3 is three', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 3 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('three');
  expect(twoText).toBeInTheDocument();
});

test('4 is many', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 4 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('many');
  expect(twoText).toBeInTheDocument();
});

test('16 is lots', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 16 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('lots');
  expect(twoText).toBeInTheDocument();
});

test('22 is lots many two', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 22 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('lots many two');
  expect(twoText).toBeInTheDocument();
});

test('24 is lots-many-many', () => {
  const app = render(<App />);
  fireEvent.change(app.getByDisplayValue(/1/i), { target: { value: 24 } })
  app.getByText('Convert').click();
  const twoText = app.getByText('lots-many-many');
  expect(twoText).toBeInTheDocument();
});