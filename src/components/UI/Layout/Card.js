import classes from './Card.module.css';

const Card = (props) => {
    const blockClasses = [classes.card];

    if (props.className) {
        blockClasses.push(props.className);
    }

    return (
        <div className={blockClasses.join(' ')}>
            {props.children}
        </div>
    )
}

export default Card;