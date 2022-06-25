import classes from './Badge.module.css';

const Badge = (props) => {
    return (
        <span className={`${classes.badge} ${props.type === 'new' ? classes.new : classes.featured}`}>
            {props.children}
        </span>
    )
}

export default Badge;