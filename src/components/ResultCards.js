import React, { useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';

export const ResultCards = ({ anime, type }) => {

    const { addAnimeToWatchlist, watchlist, moveAnimeToWatched, watched } = useContext(GlobalContext);

    let storedAnime = watchlist.find(o => o.mal_id === anime.mal_id);
    let watchedAnime = watched.find(o => o.mal_id === anime.mal_id);

    const watchlistDisabled = (storedAnime || watchedAnime) ? true : false;

    return (
        <div className="card-container" key={anime.mal_id}>
            <div className="poster-container">
                <img src={anime.image_url} alt={`${anime.title} poster`} />
            </div>
            <div className="info-container">
                {type === 'search' && (<div className="info-wrapper">
                    <h2 className="title">{anime.title}</h2>
                    <h3 className="year">{anime.start_date ? anime.start_date.substring(0, 4) : "--"}</h3>
                    <p className="rating">{anime.score}/10</p>
                    <p className="synopsis">{anime.synopsis} <a target="_blank" href={anime.url}>>>></a></p>
                </div>)}

                {(type === 'schedule' || type === 'current') && (<div className="info-wrapper">
                    <h2 className="title">{anime.title}</h2>
                    {/* <h3 className="year">{anime.airing_start ? anime.start_date.substring(0, 4) : "--"}</h3> */}
                    <p className="rating">{anime.score}/10</p>
                    <ul className="genre-tags">
                        {anime.genres && anime.genres.map(genre => (
                            <li key={genre.mal_id} className="genre">{genre.name}</li>
                        ))}
                    </ul>
                </div>)}
                {(type === 'top') && (<div className="info-wrapper">
                    <h1 className="ranking">#{anime.rank}</h1>
                    <h2 className="title">{anime.title}</h2>
                    <h3 className="year">{anime.start_date ? anime.start_date.substring(4, 9) : "--"}</h3>
                    <p className="rating">{anime.score}/10</p>
                </div>)}
                <div className="button-container">
                    <button id="watch-later" className="add"
                        disabled={watchlistDisabled} onClick={() => addAnimeToWatchlist(anime)}>
                        Watch Later</button>
                    <button id="watched" className="add"
                        disabled={watchedAnime} onClick={() => moveAnimeToWatched(anime)}>Watched</button>
                </div>
            </div>
        </div>
    );
};