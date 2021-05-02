import React from 'react';
import FilterNumber from '../FilterNumber';
import Select from '../Select';
import { ArrowLeft, ArrowRight } from '../Arrows';
import { Wrap, Pages, P } from './styled';
import {usePage} from '../../customHooks';

const Pagination = () => {
    const [ handleChangePage, totalPages,  hasNextPage,
        hasPrevPage, currentPage, dispatch
    ] = usePage();
    return (
        <Wrap>
            <ArrowLeft disabled={!hasPrevPage} onClick={() => handleChangePage(currentPage - 1)} />
            <FilterNumber cb={dispatch} />
            <Pages>
                <P>page {currentPage}/{totalPages}</P>
            </Pages>
            <Select />
            <ArrowRight disabled={!hasNextPage} onClick={() => handleChangePage(currentPage + 1)} />
        </Wrap>
    )
}

export default Pagination;