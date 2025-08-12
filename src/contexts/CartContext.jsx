import { useContext } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);
