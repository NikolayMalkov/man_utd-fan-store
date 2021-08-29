import classes from '../css/navbar.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShopCart from './ShopCart';

function Navbar() {

    const [cartVisible, setCartVisible] = useState(false);

    return (

        <div className={classes.navbar}>


            {cartVisible ? <ShopCart setCartVisible={() => setCartVisible(false)} /> : null}


            <div className={classes.nav_left}>
                <img src="mulogo.png" alt="logo" style={{width: '120px', height: '110px'}} />
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

                <ShoppingCartIcon className={classes.cart_icon} onClick={() => setCartVisible(true)} />



            </div>

        </div>
    )

}

export default Navbar;