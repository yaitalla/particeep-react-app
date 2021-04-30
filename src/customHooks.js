import { useContext, useMemo } from 'react';
import { Context } from './reducer';
import {changePage} from './actions';

export const usePage = () => {
    const {store, dispatch} = useContext(Context);
    const {movies, limit, currentPage } = store;
    
    const totalPages = useMemo(() => Math.ceil(movies.length / limit), [movies, limit]) ;
    
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