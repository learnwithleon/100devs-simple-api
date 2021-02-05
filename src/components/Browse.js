import React, { useState, useEffect } from 'react';
import { ResultCards } from './ResultCards';

export const Browse = () => {
    const [shows, setShows] = useState([]);
    const [type, setType ] = useState('current');
    const [active, setActive] = useState('');

    const getCurrent = async () => {
        setType('current');
        let today = new Date();
        let season = 'spring';
        if (today.getMonth() < 4) {
            season = 'winter';
        } else if (today.getMonth() < 7) {
            season = 'spring';
        } else if (today.getMonth() < 10) {
            season = 'summer';
        } else {
            season = 'autumn';
        }

        let url = `https://api.jikan.moe/v3/season/${today.getFullYear()}/${season}`;

        await fetch(url).then(res => res.json()).then(data => {
            setShows(data.anime.filter(data => !data.r18));
        }).catch(err => console.log(err));
    };

    const getSchedule = async () => {
        setType('schedule');
        let today = new Date();
        let dayName = '';
        switch (today.getDay()) {
            case 1:
                dayName = 'monday';
                break;
            case 2:
                dayName = 'tuesday';
                break;
            case 3:
                dayName = 'wednesday';
                break;
            case 4:
                dayName = 'thursday';
                break;
            case 5:
                dayName = 'friday';
                break;
            case 6:
                dayName = 'saturday';
                break;
            case 0:
                dayName = 'sunday';
                break;
            default:
                console.log("what happened?");
        }

        let url = `https://api.jikan.moe/v3/schedule/${dayName}`;
        await fetch(url).then(res => res.json()).then(data => {
            setShows(data[dayName].filter(data => !data.r18));
        }).catch(err => console.log(err));
    }

    const getTop = async () => {
        setType('top');
        let url = `https://api.jikan.moe/v3/top/anime`;
        await fetch(url).then(res => res.json()).then(data => {
            setShows(data.top.filter(data => !data.r18));
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getCurrent();
    }, []);

    return (
        <div className="container">
            <div className="browse-btn">
                <button onClick={getCurrent}>Current Season</button>
                <button onClick={getSchedule}>Today's Anime</button>
                <button onClick={getTop}>Top Anime</button>
            </div>
            <div className="results-wrapper">
                {shows.map(anime => (<ResultCards key={anime.mal_id} anime={anime} type={type}/>))}
            </div>
        </div>
    );
}