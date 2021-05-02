import { createContext } from 'react';
import { FETCH_MOVIES, DELETE_MOVIE, UPDATE_LIKES,
    UPDATE_DISLIKES, SET_DISPLAY_LIMIT, SET_PAGE, SET_CATEGORY_FILTERS
} from './constants';
const Context = createContext();

const initialStore = {
    movies: [],
    currentPage: 1,
    limit: 4,
    filters: []
}
const reducer = (store, {type, payload}) => {
    switch(type) {
        case FETCH_MOVIES:
            return {
                ...store,
                movies: payload.movies,
                currentPage: payload.current,
            }
        case DELETE_MOVIE:{
            const newMovies = store.movies.filter(el => el.id !== payload)
            return {
                ...store,
                movies: newMovies,
                
            }
        }
        case UPDATE_LIKES:{
            const newMovies = store.movies.map(el => {
                if (el.id === payload)
                    return {...el, likes: el.likes + 1}
                return el
                })
            return {
                ...store,
                movies: newMovies
            }
        }
        case UPDATE_DISLIKES:{
            const newMovies = store.movies.map(el => {
                if (el.id === payload)
                    return {...el, dislikes: el.dislikes + 1}
                return el
                })
            return {
                ...store,
                movies: newMovies
            }
        }
        case SET_DISPLAY_LIMIT:
            return {
                ...store,
                limit: payload,
                currentPage: 1
            };
        case SET_PAGE:
            return {
                ...store,
                currentPage: payload,
            };
        case SET_CATEGORY_FILTERS:
            return {
                ...store,
                filters: payload,
                currentPage: 1
            }
        default:
            return {
                ...store
            };
    }
};

export {
    initialStore,
    reducer,
    Context
}