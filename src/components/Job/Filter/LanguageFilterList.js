import LanguageFilterListItem from "./LanguageFilterListItem";
import classes from './LanguageFilterList.module.css';
import { generateUniqueKey } from "../../../helper";

const LanguageFilterList = (props) => {
    return (
        <main className={classes.languages}>
            <div className={classes.filters}>
                {props.languages.map((language) => (
                    <LanguageFilterListItem
                        key={generateUniqueKey(language)}
                        language={language}
                        onClickAction={props.onClickAction}
                        dismissable={props.dismissable}
                    />
                ))}
            </div>

            {props.dismissable && <span className={classes['clear-button']} onClick={props.onReset}>Clear</span>}
        </main>
    )
}

export default LanguageFilterList;