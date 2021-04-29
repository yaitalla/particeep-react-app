import React, { useContext, useEffect } from 'react';
import { Wrap, Grid, Main } from './styled';
import {Context} from '../../reducer';
import { deleteMovie, updateDislike, updateLike,
} from '../../actions';
import Card from '../../components/CardComponent';
import { movies$ } from '../../movies';
// import FilterNumber from '../../components/FilterNumber';
import { FETCH_MOVIES } from '../../constants';


const Landing = () => {
    const {store, dispatch} = useContext(Context);

    const fetchMovies = async () => {
        const res = await movies$;
        dispatch({type: FETCH_MOVIES, payload: res})
    }
    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <Wrap>
            {/* <FilterNumber cb={dispatch}/> */}
            <Main>
                <Grid>
                    {   store ?
                        store.movies?.map((item, i) =>
                            <Card key={i} updateLike={updateLike}
                                deleteMovie={deleteMovie} i={i} data={item}
                                updateDislike={updateDislike} cb={dispatch}
                            />)
                            : <p>loading...</p>
                    }
                </Grid>
            </Main>
                
        </Wrap>
    )
}

export default Landing;