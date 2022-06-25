import classes from './JobContent.module.css';

const JobContent = (props) => {
    return (
        <main className={classes['job-content']}>
            {props.children}
        </main>
    )
}

export default JobContent;