import React from 'react';
import FilterNumber from '../FilterNumber';
import { ArrowLeft, ArrowRight } from '../Arrows';
import { Wrap } from './styled';
import {usePage} from '../../customHooks';

const Pagination = () => {
    const [ handleChangePage, totalPages,  hasNextPage,
        hasPrevPage, currentPage, dispatch
    ] = usePage();
    return (
        <Wrap>
            <ArrowLeft disabled={!hasPrevPage} onClick={() => handleChangePage(currentPage - 1)} />
            <FilterNumber pages={currentPage} total={totalPages} cb={dispatch} />
            <ArrowRight disabled={!hasNextPage} onClick={() => handleChangePage(currentPage + 1)} />
        </Wrap>
    )
}

export default Pagination;