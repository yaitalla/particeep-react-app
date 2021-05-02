import React from 'react';
import { CategoryFilterWrap, Filter, FiltersGrid } from './styled';

const CategoryFilter = ({categories, filters, checkFilter}) => {
    return (
        <CategoryFilterWrap>
            <p>filter by category</p>
            <FiltersGrid>
                {
                    categories.map((filter, i) =>
                        <Filter 
                            selected={filters.indexOf(filter) !== -1}
                            onClick={() => checkFilter(filter)} key={i}
                        >
                            {filter}
                        </Filter>
                    )
                }
            </FiltersGrid>
        </CategoryFilterWrap>
    )
}

export default CategoryFilter;