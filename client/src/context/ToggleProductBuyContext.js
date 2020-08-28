import React, { useState, useEffect, createContext, useContext } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { ADD_CART, GET_CART, REMOVE_CART, UPDATE_CART } from 'graphql/cart';
import { AuthContext } from 'context/AuthContext';

export const ToggleProductBuyContext = createContext();

export const ToggleProductBuyProvider = ({ children }) => {
  const [getCartQuery, { data: cart }] = useLazyQuery(GET_CART, { fetchPolicy: 'network-only' });
  const [addCartQuery, { data: successAdd }] = useMutation(ADD_CART);
  const [removeCartQuery, { data: successRemove }] = useMutation(REMOVE_CART);
  const [updateCartQuery, { data: successUpdate }] = useMutation(UPDATE_CART);
  const [selected, setSelected] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [userInfo] = useContext(AuthContext);

  useEffect(() => {
    if (userInfo.id) {
      getCartQuery({ variables: { userId: userInfo.id } });
    }
  }, [userInfo]);

  useEffect(() => {
    if (cart) {
      const newCartItem = {};
      const cartItems = cart.GetCart;
      cartItems.forEach((cartItem) => {
        const id = cartItem.id;
        newCartItem[id] = cartItem;
      });
      setCartItem(newCartItem);
    }
  }, [cart]);

  useEffect(() => {
    if (successAdd) {
      const { success } = successAdd.AddCart;
      if (success) {
        getCartQuery({ variables: { userId: userInfo.id } });
      }
    }
  }, [successAdd]);

  useEffect(() => {
    if (successRemove) {
      const { success } = successRemove.RemoveCart;
      if (success) {
        getCartQuery({ variables: { userId: userInfo.id } });
      }
    }
  }, [successRemove]);

  useEffect(() => {
    if (successUpdate) {
      const { success } = successUpdate.UpdateCart;
      if (success) {
        getCartQuery({ variables: { userId: userInfo.id } });
      }
    }
  }, [successUpdate]);

  return (
    <ToggleProductBuyContext.Provider
      value={[
        selected,
        setSelected,
        cartItem,
        setCartItem,
        getCartQuery,
        addCartQuery,
        removeCartQuery,
        updateCartQuery,
      ]}
    >
      {children}
    </ToggleProductBuyContext.Provider>
  );
};
