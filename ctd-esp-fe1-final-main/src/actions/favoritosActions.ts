import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICardFavorite } from "../types"; 

export interface AddFavoriteAction extends Action {
  type: "ADD_FAVORITE";
  id: string;
  favorite: boolean;
}

export interface LoadFavoriteAction extends Action {
  type: "LOAD_FAVORITES";
  cards: ICardFavorite[];
}

export interface DeleteFavoriteAction extends Action {
  type: "DELETE_FAVORITE";
  id: string;
  favorite: boolean;
}

export const addFavorite: ActionCreator<AddFavoriteAction> = (id: string) => {
  return {
    type: "ADD_FAVORITE",
    id,
    favorite: true,
  };
};

export const loadFavorites: ActionCreator<LoadFavoriteAction> = (cards: ICardFavorite[]) => {
  return {
    type: "LOAD_FAVORITES",
    cards,
  };
};

export const deleteFavorite: ActionCreator<DeleteFavoriteAction> = (id: string) => {
  return {
    type: "DELETE_FAVORITE",
    id,
    favorite: false,
  };
};
