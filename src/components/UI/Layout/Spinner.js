import classes from './Spinner.module.css';

const Spinner = (props) => {
    return (
        <div className={classes['spinner-wrapper']}>
            <span>{props.children}</span>
            <div className={classes.spinner}></div>
        </div>
    )
}

export default Spinner;