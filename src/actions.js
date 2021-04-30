import {movies$} from './movies';
import { DELETE_MOVIE, UPDATE_LIKES, UPDATE_DISLIKES,
    FETCH_MOVIES, SET_PAGE
} from './constants';

export const changePage = (dispatch, payload) => {
    dispatch({type: SET_PAGE, payload})
}

export const deleteMovie = (id, dispatch) => {
    dispatch({type: DELETE_MOVIE, payload: id})
}

export const updateLike = (id, dispatch) => {
    dispatch({type: UPDATE_LIKES, payload: id})
}
export const updateDislike = (id, dispatch) => {
    dispatch({type: UPDATE_DISLIKES, payload: id})
}

export const fetchMovies = async (dispatch) => {
    const ret = await movies$;
    dispatch({type: FETCH_MOVIES, payload: ret})
}
