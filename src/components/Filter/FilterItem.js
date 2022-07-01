import React, { useContext } from "react";
import FilterContext from "../../store/filter-context";
import DismissableTag from "../UI/Tag/DismissableTag";
import FilterableTag from "../UI/Tag/FilterableTag";

const FilterItem = (props) => {
    const filterContext = useContext(FilterContext);

    const addFilterHandler = () => {
        filterContext.addFilter(props.language);
    }

    const removeFilterHandler = () => {
        filterContext.removeFilter(props.language)
    }

    return (
        <React.Fragment>
            {!props.dismissable && <FilterableTag language={props.language} onClick={addFilterHandler} />}
            {props.dismissable && <DismissableTag language={props.language} onClick={removeFilterHandler} />}
        </React.Fragment>
    )
}

export default FilterItem;