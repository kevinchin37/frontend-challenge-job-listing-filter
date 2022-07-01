import FilterItem from "./FilterItem";
import { generateUniqueKey } from "../../helper";
import classes from './AvailableFilterList.module.css';

const AvailableFilterList = (props) => {
    return (
        <div className={classes.filters}>
            {props.languages.map((language) => (
                <FilterItem
                    key={generateUniqueKey(language)}
                    language={language}
                    dismissable={false}
                />
            ))}
        </div>
    )
}

export default AvailableFilterList;