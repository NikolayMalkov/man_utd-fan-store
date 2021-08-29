
import styles from './../css/content.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/shopcart_reducer';


export default function ShopCart(props) {

    const dispatch = useDispatch();

    const items = useSelector(store => store.shopcart.items)
    const totalPrice = useSelector(store => store.shopcart.totalPrice)

    const remove = (id, price) => {
        dispatch(removeFromCart(id, price))
    }

    return (
        <div className={styles.cart_wrapper}  >
            <div className={styles.cart_page}>
                <CloseIcon onClick={() => props.setCartVisible(false)}
                    style={{ color: 'black', height: '40px', width: '40px', marginLeft: '380px', marginTop: '30px', cursor: 'pointer' }} />
                <h3>Order list</h3>
                <ul>
                    {items.map((item) => <li key={item.id}>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.price} $
                        </div>
                         <CloseIcon style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => remove(item.id, item.price)} />
                    </li>)}
                   
                </ul>
                <div className={styles.cart_page_btn}>
                    <button>Pay</button>
                    <div></div>
                    <span>{totalPrice} $</span>
                </div>
            </div>
        </div>
    )
}