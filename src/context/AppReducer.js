export default (state, action) => {
    switch(action.type) {
        case "ADD_ANIME_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        
        case "MOVE_ANIME_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched],
                watchlist: state.watchlist.filter(anime => anime.mal_id !== action.payload.mal_id)
            };
        case "MOVE_ANIME_BACK_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
                watched: state.watched.filter(anime => anime !== action.payload)
            }
        case "REMOVE_ANIME_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(anime => anime.mal_id !== action.payload)
            }
        case "REMOVE_ANIME_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(anime => anime.mal_id !== action.payload)
            }
        default:
            return state;
        
    }
};