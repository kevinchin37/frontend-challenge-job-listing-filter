import Tag from "./Tag";
import removeIcon from '../../../assets/images/icon-remove.svg';
import classes from './DismissableTag.module.css';

const DismissableTag = (props) => {
    return (
        <div className={classes.dismissable}>
            <Tag>
                <span className={classes.language}>{props.language}</span>
                <button className={classes['dismiss-button']} onClick={props.onClick}>
                    <img src={removeIcon} />
                </button>
            </Tag>
        </div>
    )
}

export default DismissableTag;