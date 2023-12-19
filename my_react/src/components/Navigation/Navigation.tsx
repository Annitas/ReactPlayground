import classes from './Navigation.module.css';

function Navigation() {

    return (
        // <header className={classes.header}>
        //   <img className={classes.header_img} src="../src/assets/ellipse_logo.png" alt="portlandlogo"/>
        //   <span className={classes.header_logo}>T</span>
        // </header>
      <header className={classes.header}>
        <span className={classes.header_logo}><img src="../src/assets/ellipse_logo.png" alt="portlandlogo"/></span>
        <nav className={classes.header_navbar}>
          <ul className={classes.header_nav_list}>
            <li className={classes.header_nav_list_item}><a href="#">Home</a></li>
            <li className={classes.header_nav_list_item}><a href="#">Find a doctor</a></li>
            <li className={classes.header_nav_list_item}><a href="#">Apps</a></li>
            <li className={classes.header_nav_list_item}><a href="#">Testimanials</a></li>
            <li className={classes.header_nav_list_item}><a href="#">About us</a></li>
          </ul>
        </nav>

        
      </header>
      
    );
}

export default Navigation