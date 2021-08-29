
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWomenKitsAC } from "../store/womenkits_reducer";
import ItemsCard from './ItemsCard';
import styles from './../css/content.module.css'
import { getWomenkits } from "../data_access/data_access";

export default function Womenkits() {

   

    const dispatch = useDispatch();
    const Kits = useSelector(store => store.womenkits.items)

    useEffect(() => {
        getWomenkits().then((res) => dispatch(addWomenKitsAC(res)))
    },[])



    return (

        <div className={styles.catalog_items}>

            {Kits === undefined ? null : Kits.map((kit) => <ItemsCard 
                    id={kit.id}
                    key={kit.id} 
                    title={kit.title} 
                    img={kit.img} 
                    price={kit.price} 
                    /> )}
        </div>

    )
}