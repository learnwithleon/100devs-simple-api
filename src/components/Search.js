import React, { useState } from 'react';
import { ResultCards } from './ResultCards';


export const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        let url = `https://api.jikan.moe/v3/search/anime?q=${search}&page=1`;

        fetch(url).then(res => res.json()).then(data => {
            setResults(data.results.filter(data => data.rated !== "Rx"));
        }).catch(err => console.log(err));
    };

    return (
        <div className="container">
            <form>
                <input placeholder="Enter your search" type="text" value={search} onChange={onChange} />
                <button onClick={getSearch}><i className="fas fa-search 2x"></i></button>
            </form>
            <div className="results-wrapper">
                {results.length > 0 && results.map(anime => (
                   <ResultCards anime={anime} type="search" />
                ))}
            </div>
        </div>
    );
}