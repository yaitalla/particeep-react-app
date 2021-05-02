import React from 'react';
import { FilterWrap, ButtonWrap, ChoiceButton } from './styled';
import { changeLimit } from '../../actions';

const FilterByNumber = ({ cb }) => {
    const values = [4, 8, 12];
    return (
        <FilterWrap>
            <p>change display</p>
            <ButtonWrap>
                {
                    values.map((value, i) =>
                        <ChoiceButton onClick={() => changeLimit(value, cb)} key={i}>
                            {value}
                        </ChoiceButton>
                    )
                }
            </ButtonWrap>
        </FilterWrap>
    )
}

export default FilterByNumber;