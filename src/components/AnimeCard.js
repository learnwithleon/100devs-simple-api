import React from 'react';
import { CardControls } from './CardControls';

export const AnimeCard = ({ anime, type }) => {
    return (
        <div className="anime-card">
            <div className="overlay"></div>

            {anime.image_url ? (
                <img src={anime.image_url} alt={`${anime.title} poster`} />
            ) : (
                <div className="filler-poster"></div>
            )}

            <CardControls type={type} anime={anime} />
        </div>
    );
};