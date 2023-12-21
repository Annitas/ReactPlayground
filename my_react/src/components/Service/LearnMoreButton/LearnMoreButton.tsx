import classes from './LearnMoreButton.module.css';

function LearnMoreButton(props: {title: string}) {

    return (
        <>
        <div className={classes.learn_more_block}>
            <button className={classes.learn_more_button}>
                {props.title}
            </button>
        </div>
        </>
    );
}

export default LearnMoreButton