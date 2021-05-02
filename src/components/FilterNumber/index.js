import React from 'react';
import { Wrap, BtnWrap, ChoiceBtn } from './styled';
import { changeLimit } from '../../actions';

const FilterNumber = ({ cb }) => {
    const values = [4, 8, 12];
    return (
        <Wrap>
            <p>change display</p>
            <BtnWrap>
                {
                    values.map((value, i) =>
                        <ChoiceBtn onClick={() => changeLimit(value, cb)} key={i}>
                            {value}
                        </ChoiceBtn>
                    )
                }
            </BtnWrap>
        </Wrap>
    )
}

export default FilterNumber;