import classes from './Header.module.css';

function Header() {

    return (
        <div className={classes.div}>
        <div className={classes.left_block}>
            <h2 className={classes.h2}>Virtual healthcare for you</h2>
            <p className={classes.p}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <button className={classes.button}>Consult today</button>
        </div>
        <div className={classes.right_block}>
            <img className={classes.image} src="../src/assets/illustration.png" alt="portlandlogo"/>
        </div>
            
        </div>

    );
}

export default Header