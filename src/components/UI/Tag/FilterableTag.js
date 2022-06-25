import Tag from "./Tag";
import classes from './FilterableTag.module.css';

const FilterableTag = (props) => {
    return (
        <Tag>
            <div className={classes.language} onClick={props.onClick}>{props.language}</div>
        </Tag>
    )
}

export default FilterableTag;