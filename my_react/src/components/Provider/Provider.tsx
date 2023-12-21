import classes from './Provider.module.css';
import LearnMoreButton from '../Service/LearnMoreButton/index';

function Provider() {

    return (
        <div className={classes.div}>
        <div className={classes.right_block}>
            <h2 className={classes.h2}>Leading healthcare providers</h2>
            <p className={classes.p}>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            <LearnMoreButton title="Learn more"/>
        </div>
        <div className={classes.left_block}>
            <img className={classes.image} src="../src/assets/healthcare.png" alt="portlandlogo"/>
        </div>
            
        </div>

    );
}

export default Provider