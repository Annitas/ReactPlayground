import classes from './Footer.module.css';

function Footer() {

    return (
        <div className={classes.allblocks}>
            <div className={classes.main_info}>
                <h2 className={classes.h2header}>HealthCare</h2>
                <p className={classes.pfooter}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className={classes.pfooter}>©HealthCare PTY LTD 2023. All rights reserved</p>
            </div>
            <div className={classes.company}>
                <h3 className={classes.h3header}>Company</h3>
                <p className={classes.pfooter}>About</p>
                <p className={classes.pfooter}>Testimonials</p>
                <p className={classes.pfooter}>Find a doctor</p>
                <p className={classes.pfooter}>Apps</p>
            </div>
            <div className={classes.region}>
                <h3 className={classes.h3header}>Region</h3>
                <p className={classes.pfooter}>Indonesia</p>
                <p className={classes.pfooter}>Singapore</p>
                <p className={classes.pfooter}>Hongkong</p>
                <p className={classes.pfooter}>Canada</p>
            </div>
            <div className={classes.help}>
                <h3 className={classes.h3header}>Help</h3>
                <p className={classes.pfooter}>Help center</p>
                <p className={classes.pfooter}>Contact support</p>
                <p className={classes.pfooter}>Instructions</p>
                <p className={classes.pfooter}>How it works</p>
            </div>
        </div>
    );
}

export default Footer