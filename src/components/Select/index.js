import React from 'react';
import {useFilter} from '../../customHooks';
import { Wrap, Filter, FiltersGrid } from './styled';

const Select = () => {
    const [categories, filters, setFilters] = useFilter();

    const checkFilter = (check) => {
        let i = filters.indexOf(check);
        if (i === -1){
            filters.push(check)
        } else {
            filters.splice(i, 1)
        }
        setFilters(filters);
    }

    return (
        <Wrap>
            <p>filter by category</p>
            <FiltersGrid>
                {
                    categories.map((filter, i) =>
                        <Filter selected={filters.indexOf(filter) !== -1}
                            onClick={() => checkFilter(filter)} key={i} >
                                {filter}
                        </Filter>
                    )
                }

            </FiltersGrid>
        </Wrap>
    )
}

export default Select;