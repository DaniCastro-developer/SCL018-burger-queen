import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import menu from "./menu/menu.json";
import { UserContext } from "./context/UserProvider";

const data = menu.products;
const {
  cliente,
  pedido,
  eliminar,
  agregar,
  total,
  quitar,
  OpenModal,
  error,
  resetOrder, 
} = React.useContext(UserContext);

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('Agregar productos a un pedido', () => {
  expect(typeof eliminar).toBe('function');
})


