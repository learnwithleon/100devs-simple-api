import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {AnimeCard} from '../components/AnimeCard';


export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    return (
        <div className="container">
            <div className="header">
            <h1>Watched List</h1>
            <span className="pill">{`${watched.length} anime`}</span>
            </div>
                {watched.length > 0 ? (
                    <div className="anime-grid">
                        {watched.map(anime => (
                   <AnimeCard anime={anime} type="watched" />
                ))}</div>) : (
                    <h3>You haven't watched any anime yet.</h3>
                )}
            
        </div>
    );
}