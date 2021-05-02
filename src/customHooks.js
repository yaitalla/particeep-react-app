import { useContext, useMemo } from 'react';
import { Context } from './reducer';
import {changePage} from './actions';
import { SET_CATEGORY_FILTERS } from './constants';

export const usePage = () => {
    const {store, dispatch} = useContext(Context);
    const {movies, limit, currentPage, filters } = store;
    
    const totalPages = useMemo(() => Math.ceil(movies.filter( movie =>
            (filters.length === 0)
            || filters.indexOf(movie.category) !== -1
        ).length / limit), [movies, limit, filters]) ;

    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;
    
    const handleChangePage = (newPage) => changePage(dispatch,  newPage);

    return [
        handleChangePage,
        totalPages,
        hasNextPage,
        hasPrevPage,
        currentPage,
        dispatch,
    ];
}

export const useOffset = () => {
    const {store} = useContext(Context);
    const {limit, currentPage } = store;

    const offset = useMemo(() => limit * (currentPage - 1), [currentPage, limit]) ;

    return offset;
}

export const useFilter = () => {
    const {store, dispatch} = useContext(Context);
    const { movies, filters } = store;
    const categories = [];
    movies.forEach(movie => {
            if (categories.indexOf(movie.category) === -1) {
                categories.push(movie.category)
            }
        }
    )
    const setFilters = (newFilters) => {
        dispatch({type: SET_CATEGORY_FILTERS, payload: newFilters})
    }
    
    return [categories, filters, setFilters];
}