import { createContext } from 'react';
import { FETCH_MOVIES, DELETE_MOVIE, UPDATE_LIKES,
    UPDATE_DISLIKES, SET_LIMIT, SET_PAGE
} from './constants';
const Context = createContext();

const initialStore = {
    movies: [],
    currentPage: 1,
    offset: 0,
    limit: 4,
    maxPage: 0
}
const reducer = (store, {type, payload}) => {
    // console.log(type, payload)
    switch(type) {
        case FETCH_MOVIES:
            return {
                ...store,
                movies: payload.movies,
                currentPage: payload.current,
                maxPage: payload.maxPages
            }
        case DELETE_MOVIE:{
            const newMovies = store.movies.filter(el => el.id !== payload)
            return {
                ...store,
                movies: newMovies
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
        case SET_LIMIT:
            return {
                ...store,
                limit: payload,

            }
        case SET_PAGE:
            return {
                ...store,
                currentPage: payload.current,
                offset: payload.offset,
            }
        default:
            return {
                ...store
            }
    }
}

export {
    initialStore,
    reducer,
    Context
}