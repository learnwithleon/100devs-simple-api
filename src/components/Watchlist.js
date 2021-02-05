import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {AnimeCard} from '../components/AnimeCard';


export const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);

    return (
        <div className="container">
            <div className="header">
            <h1>Watchlist</h1>
            <span className="pill">{`${watchlist.length} anime`}</span>
            </div>
                {watchlist.length > 0 ? (
                <div className="anime-grid">
                    {watchlist.map(anime => (
                   <AnimeCard anime={anime} type="watchlist" />
                    ))}
                    </div>
                    ) : (
                    <h3>You don't have any anime to watch.</h3>
                )}
            
        </div>
    );
}