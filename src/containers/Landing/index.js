import React, { useContext, useEffect } from 'react';
import { Wrap, Grid, Main } from './styled';
import {Context} from '../../reducer';
import { deleteMovie, updateDislike, updateLike, changePage
} from '../../actions';
import Card from '../../components/CardComponent';
import { movies$ } from '../../movies';
import FilterNumber from '../../components/FilterNumber';
import { FETCH_MOVIES, SET_PAGE } from '../../constants';
import { ArrowLeft, ArrowRight } from '../../components/Arrows';


const Landing = () => {
    const {store, dispatch} = useContext(Context);

    const fetchMovies = async () => {
        const res = await movies$;
        const payload = {
            current: 1,
            maxPages: Math.ceil(res.length / 4),
            movies: res
        }
        dispatch({type: FETCH_MOVIES, payload})
    }
    const checkPrevPage = () => {
        if (store.currentPage === 1){
            return;
        }
        const payload = {
            current: store.currentPage - 1,
            offset: store.offset - store.limit
        }
        changePage(dispatch, payload);
    }
    const checkNextPage = () => {
        if (store.currentPage >= store.maxPage){
            return;
        }
        const payload = {
            current: store.currentPage + 1,
            offset: store.offset + store.limit
        }
        changePage(dispatch, payload);
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <Wrap onClick={() => console.log(store.maxPage > store.currentPage )} >
            <ArrowLeft displaying={store.currentPage > 1} cb={checkPrevPage} />
            <FilterNumber cb={dispatch}/>
            <Main>
                <Grid>
                    {   store ?
                        store.movies?.map((item, i) =>
                            (i < (store.limit * store.currentPage)) &&
                            (i >= store.offset) &&
                            <Card key={i} updateLike={updateLike}
                                deleteMovie={deleteMovie} i={i} data={item}
                                updateDislike={updateDislike} cb={dispatch}
                            />
                        )
                            : <p>loading...</p>
                    }
                </Grid>
            </Main>
            <ArrowRight displaying={store.maxPage > store.currentPage} cb={checkNextPage} />
        </Wrap>
    )
}

export default Landing;