import React from 'react';
import { LeftArrow, RightArrow } from '../Arrows';
import { PaginationWrap, Pages, P } from './styled';
import {usePage} from '../../customHooks';

const Pagination = ({dispatch}) => {
    const [ handleChangePage, totalPages,  hasNextPage,
        hasPrevPage, currentPage
    ] = usePage();
    return (
        <PaginationWrap>
            <LeftArrow disabled={!hasPrevPage} onClick={() => handleChangePage(currentPage - 1)} />
            <Pages>
                <P>page {currentPage}/{totalPages}</P>
            </Pages>
            <RightArrow disabled={!hasNextPage} onClick={() => handleChangePage(currentPage + 1)} />
        </PaginationWrap>
    )
}

export default Pagination;