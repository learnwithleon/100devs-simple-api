import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CardControls = ({ anime, type }) => {

    const { removeAnimeFromWatchlist, watchlist, moveAnimeToWatched, moveAnimeBackToWatchlist, removeAnimeFromWatched } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn" onClick={() => moveAnimeToWatched(anime)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => removeAnimeFromWatchlist(anime.mal_id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn" onClick={() => moveAnimeBackToWatchlist(anime)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                    <button className="ctrl-btn" onClick={() => removeAnimeFromWatched(anime.mal_id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )

            }
        </div>
    );
};