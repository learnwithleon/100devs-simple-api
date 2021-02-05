import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    const addAnimeToWatchlist = (anime) => {
        dispatch({ type: "ADD_ANIME_TO_WATCHLIST", payload: anime });
    };

    const moveAnimeToWatched = (anime) => {
        dispatch({ type: "MOVE_ANIME_TO_WATCHED", payload: anime });
    };

    const moveAnimeBackToWatchlist = (anime) => {
        dispatch({ type: "MOVE_ANIME_BACK_TO_WATCHLIST", payload: anime });
    };

    const removeAnimeFromWatchlist = (mal_id) => {
        dispatch({ type: "REMOVE_ANIME_FROM_WATCHLIST", payload: mal_id });
    };

    const removeAnimeFromWatched = (mal_id) => {
        dispatch({ type: "REMOVE_ANIME_FROM_WATCHED", payload: mal_id });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addAnimeToWatchlist,
                moveAnimeToWatched,
                moveAnimeBackToWatchlist,
                removeAnimeFromWatched,
                removeAnimeFromWatchlist
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
}