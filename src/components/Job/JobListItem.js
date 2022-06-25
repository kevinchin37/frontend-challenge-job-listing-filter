import classes from './JobListItem.module.css';
import Card from '../UI/Layout/Card';
import JobContent from "./JobContent";
import JobDetail from "./JobDetail";
import LanguageFilterList from "./Filter/LanguageFilterList";

const JobListItem = (props) => {
    const addToFilterHandler = (filterLanguage) => {
        props.addToFilter(filterLanguage);
    }

    const isFeatured = props.item.featured === true ? classes.featured : '';

    return (
        <section className={`${classes.job} ${isFeatured}`}>
            <Card>
                <JobContent>
                    <JobDetail details={props.item} />
                    <LanguageFilterList
                        languages={props.item.languages}
                        onClickAction={addToFilterHandler}
                        dismissable={false}
                    />
                </JobContent>
            </Card>
        </section>
    )
}

export default JobListItem;