import React from 'react';
import { Wrap, P, BtnWrap, ChoiceBtn,
    RadioInput, RadioWrap, RadioContainer
} from './styled';
import {SET_LIMIT, SET_PAGE} from '../../constants';

const FilterNumber = ({ cb }) => {
    return (
        <Wrap>
            <p>change display</p>
            {/* <RadioContainer>
                <RadioWrap>
                    <RadioInput value={4} type="radio" />
                    <P>4</P>
                </RadioWrap>
                <RadioWrap>
                    <RadioInput value={8} type="radio" />
                    <P>8</P>
                </RadioWrap>
                <RadioWrap>
                    <RadioInput value={12} type="radio" />
                    <P>12</P>
                </RadioWrap>
            </RadioContainer> */}
            <BtnWrap>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 4})} >4</ChoiceBtn>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 8})} >8</ChoiceBtn>
                <ChoiceBtn onClick={() => cb({type: SET_LIMIT, payload: 12})} >12</ChoiceBtn>
            </BtnWrap>
        </Wrap>
    )
}

export default FilterNumber;