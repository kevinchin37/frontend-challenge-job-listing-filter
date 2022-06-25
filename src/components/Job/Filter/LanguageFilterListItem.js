import React from "react";
import DismissableTag from "../../UI/Tag/DismissableTag";
import FilterableTag from "../../UI/Tag/FilterableTag";

const LanguageFilterListItem = (props) => {
    const onClickHandler = () => {
        props.onClickAction(props.language);
    }

    return (
        <React.Fragment>
            {!props.dismissable && <FilterableTag language={props.language} onClick={onClickHandler} />}
            {props.dismissable && <DismissableTag language={props.language} onClick={onClickHandler} />}
        </React.Fragment>
    )
}

export default LanguageFilterListItem;