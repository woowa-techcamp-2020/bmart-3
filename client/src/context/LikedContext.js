import React, { useState, useEffect, createContext, useContext } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { GET_LIKED, TOGGLE_LIKED } from 'graphql/liked';
import { AuthContext } from 'context/AuthContext';

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [getLikedQuery, { data: liked }] = useLazyQuery(GET_LIKED, { fetchPolicy: 'network-only' });
  const [toggleLikedQuery, { data: likedList }] = useMutation(TOGGLE_LIKED);
  const [likedItem, setLikedItem] = useState({});
  const [userInfo] = useContext(AuthContext);

  userEffect(() => {
    if (userInfo.id) {
      getLikedQuery({ variables: { userId: userInfo.id } });
    }
  }, [userInfo]);

  useEffect(() => {
    if (liked) {
      const newLikedItem = {};
      const likedItems = liked.GetLiked;
      likedItems.forEach((item) => {
        const id = item.id;
        newLikedItem[id] = item;
      });
      setLikedItem(newLikedItem);
    }
  }, [liked]);

  useEffect(() => {
    if (likedList) {
      const { message } = likedList.ToggleLiked;
      if (message) {
        getLikedQuery({ variables: { userId: userInfo.id } });
      }
    }
  }, [likedList]);

  return (
    <LikedContext.Provider value={[likedItem, setLikedItem, getLikedQuery, toggleLikedQuery]}>
      {children}
    </LikedContext.Provider>
  );
};
