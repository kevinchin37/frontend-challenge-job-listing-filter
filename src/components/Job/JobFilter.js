import Card from "../UI/Layout/Card";
import LanguageFilterList from "./Filter/LanguageFilterList";
import classes from "./JobFilter.module.css";

const JobFilter = (props) => {
    return (
        <section className={`${classes.filters}`}>
            <Card>
                <LanguageFilterList
                    languages={props.languages}
                    onClickAction={props.removeFilter}
                    dismissable={true}
                    onReset={props.resetFilter}
                />
            </Card>
        </section>
    )
}

export default JobFilter;