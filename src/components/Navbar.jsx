import classes from '../css/navbar.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <div className={classes.navbar}>

            <div className={classes.nav_left}>
                <img src="manchester-united.svg" alt="logo" />
            </div>

            <div className={classes.nav_text}>
                <p>Manchester United React store</p>
                <p>for true fans</p>
            </div>



            <div className={classes.nav_right}>
                <ul className={classes.menu}>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/kits" >KITS</Link></li>
                    <li><Link to="/train" >TRAINING</Link></li>
                    <li><Link to="/women" >WOMEN</Link></li>
                </ul>
                
            </div>

           

            <div className={classes.cart}>
                
                <Link to="/cart"><ShoppingCartIcon className={classes.cart_icon} /></Link>
                
            </div>

        </div>
    )

}

export default Navbar;