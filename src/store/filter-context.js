import React from "react";

// for better auto completion
const FilterContext = React.createContext({
    filters: [],
    addFilter: (item) => {},
    removeFilter: (item) => {},
    resetFilter: () => {}
});

export default FilterContext;