import React, { useContext, useEffect } from 'react';
import { Wrap, Grid, Main } from './styled';
import {Context} from '../../reducer';
import { deleteMovie, updateDislike, updateLike } from '../../actions';
import Card from '../../components/CardComponent';
import { movies$ } from '../../movies';
import { FETCH_MOVIES } from '../../constants';
import Pagination from '../../components/Pagination';
import { useOffset } from '../../customHooks';

const Landing = () => {
    const {store, dispatch} = useContext(Context);
    const { limit, filters } = store;
    const offset = useOffset();

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
        <Wrap>
            <Pagination />
            <Main>
                <Grid>
                    {
                        store?.movies?.filter(movie => (filters.length === 0) || filters.indexOf(movie.category) !== -1 ).slice(offset, offset + limit).map((item, i) =>
                            <Card key={i} updateLike={updateLike}
                                deleteMovie={deleteMovie} i={i} data={item}
                                updateDislike={updateDislike} cb={dispatch}
                            />
                        )
                    }
                </Grid>
            </Main>
        </Wrap>
    )
}

export default Landing;