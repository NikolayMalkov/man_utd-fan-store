
import styles from './../css/content.module.css';
import CloseIcon from '@material-ui/icons/Close';


export default function ShopCart(props) {




    return (
        <div className={styles.cart_wrapper}  >
            <div className={styles.cart_page}>
                <CloseIcon onClick={() => props.setCartVisible(false)} 
                    style={{color: 'black', height: '40px', width: '40px', marginLeft: '380px', marginTop: '30px', cursor: 'pointer'}}/>
                <h3>Order list</h3>
                <ul>
                    <li>Товар в корзине1<CloseIcon style={{height: '30px', width: '30px'}}/></li>
                    <li>Товар в корзине2<CloseIcon style={{height: '30px', width: '30px'}}/></li>
                </ul>
                <div className={styles.cart_page_btn}>
                    <button>Pay</button>
                    <div></div>
                    <span>1500 $</span>
                </div>
            </div>
        </div>
    )
}