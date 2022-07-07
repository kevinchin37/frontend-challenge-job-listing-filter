import { useState } from 'react';
import FilterContext from "./filter-context";

const FilterProvider = (props) => {
    const [filters, setFilters] = useState([]);

    const addFilterHandler = (filterToAdd) => {
        setFilters((prevFilters) => {
            let updatedFilters = prevFilters;

            const existingFilterIndex = filters.findIndex(filter => filter == filterToAdd);
            if (existingFilterIndex < 0) {
                updatedFilters = [...prevFilters, filterToAdd];
            }

            return updatedFilters;
        });
    }

    const removeFilterHandler = (filterToRemove) => {
        setFilters((prevFilters) => {
            const existingFilterIndex = prevFilters.findIndex(filter => filter == filterToRemove);
            const updatedfilter = prevFilters.filter((filter, index) => index != existingFilterIndex);

            return updatedfilter;
        });
    }

    const resetFilterHandler = () => {
        setFilters([]);
    }

    const filterContextValues = {
        filters,
        addFilter: addFilterHandler,
        removeFilter: removeFilterHandler,
        resetFilter: resetFilterHandler
    }

    return (
        <FilterContext.Provider value={filterContextValues}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider;