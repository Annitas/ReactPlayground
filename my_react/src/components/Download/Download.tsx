import classes from './Download.module.css';
import LearnMoreButton from '../Service/LearnMoreButton/index';

function Download() {

    return (
        <div className={classes.div}>
        <div className={classes.left_block}>
            <h2 className={classes.h2}>Download our mobile apps</h2>
            <p className={classes.p}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
            <LearnMoreButton title="Download"/>
        </div>
        <div className={classes.right_block}>
            <img className={classes.image} src="../src/assets/download.png" alt="portlandlogo"/>
        </div>
            
        </div>

    );
}

export default Download