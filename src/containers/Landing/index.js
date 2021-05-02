import React, { useContext, useEffect } from 'react';
import { LandingWrapper, Grid, MainLayout, BoardWrap } from './styled';
import {Context} from '../../reducer';
import { deleteMovie, updateDislike, updateLike } from '../../actions';
import Card from '../../components/Card';
import { movies$ } from '../../movies';
import { FETCH_MOVIES } from '../../constants';
import Pagination from '../../components/Pagination';
import { useFilter, useOffset } from '../../customHooks';
import CategoryFilter from '../../components/CategoryFilter';
import FilterByNumber from '../../components/DisplayFilter';

const Landing = () => {
    const {store, dispatch} = useContext(Context);
    const { limit } = store;
    const offset = useOffset();

    const [categories, filters, setFilters] = useFilter();
    
    const filteredMovies = store?.movies?.filter(movie => (filters.length === 0) || filters.indexOf(movie.category) !== -1 ).slice(offset, offset + limit);
    
    const checkFilter = (check) => {
        let i = filters.indexOf(check);
        if (i === -1){
            filters.push(check)
        } else {
            filters.splice(i, 1)
        }
        setFilters(filters);
    }
    
    const fetchMovies = async () => {
        const res = await movies$;
        const payload = {
            current: 1,
            movies: res
        }
        dispatch({type: FETCH_MOVIES, payload})
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <LandingWrapper>
            <BoardWrap>
                <CategoryFilter checkFilter={checkFilter} categories={categories} filters={filters} />
                <FilterByNumber cb={dispatch}/>
                <Pagination dispatch={dispatch}/>
            </BoardWrap>
            
            <MainLayout>
                <Grid>
                    {
                        filteredMovies.map((item, i) =>
                            <Card key={i} updateLike={updateLike}
                                deleteMovie={deleteMovie} i={i} data={item}
                                updateDislike={updateDislike} cb={dispatch}
                                isLastCard={filteredMovies.length === 1}
                            />
                        )
                    }
                </Grid>
            </MainLayout>
        </LandingWrapper>
    )
}

export default Landing;