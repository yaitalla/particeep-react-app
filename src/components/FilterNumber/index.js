import React from 'react';
import { Wrap, BtnWrap, ChoiceBtn,
} from './styled';
import {SET_LIMIT} from '../../constants';

const FilterNumber = ({ cb, pages, total }) => {
    return (
        <Wrap>
            <p>change display</p>
            
            <BtnWrap>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 4})} >4</ChoiceBtn>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 8})} >8</ChoiceBtn>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 12})} >12</ChoiceBtn>
            </BtnWrap>

            <p>page {pages}/{total}</p>
        </Wrap>
    )
}

export default FilterNumber;