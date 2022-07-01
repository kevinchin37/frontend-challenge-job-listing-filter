import Card from '../UI/Layout/Card';
import JobContent from "./JobContent";
import JobDetail from "./JobDetail";
import AvailableFilterList from '../Filter/AvailableFilterList';
import classes from './JobListItem.module.css';

const JobListItem = (props) => {
    const isFeatured = props.item.featured === true ? classes.featured : '';

    return (
        <Card className={`${classes.job} ${isFeatured}`}>
            <JobContent>
                <JobDetail details={props.item} />
                <AvailableFilterList languages={props.item.languages}/>
            </JobContent>
        </Card>
    )
}

export default JobListItem;