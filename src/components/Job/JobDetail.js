import classes from './JobDetail.module.css';
import Badge from "../UI/Badge/Badge";
import cardClass from '../UI/Layout/Card.module.css';

const JobDetail = (props) => {
    return (
        <div className={classes['detail-wrapper']}>
            <img className={classes.logo} src={`/dummy_data${props.details.logo}`}/>

            <div className={classes.detail}>
                <span className={classes['company-name']}>
                    {props.details.company}
                </span>

                {props.details.new && <Badge type="new">New!</Badge>}
                {props.details.featured && <Badge type="featured">Featured</Badge>}

                <h3 className={`${cardClass.highlight} ${classes.position}`}>{props.details.position}</h3>

                <div className={classes['meta-wrapper']}>
                    <span className={classes.meta}>{props.details.postedAt}</span>
                    <span className={classes.meta}>{props.details.contract}</span>
                    <span className={classes.meta}>{props.details.location}</span>
                </div>
            </div>
        </div>
    )
}

export default JobDetail;