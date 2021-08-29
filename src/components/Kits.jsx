
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addKitsAC } from "../store/kits_reducer";
import ItemsCard from './ItemsCard';
import styles from './../css/content.module.css'
import { getKits } from "../data_access/data_access";

export default function Kits() {

   

    const dispatch = useDispatch();
    const Kits = useSelector(store => store.kits.items)

    useEffect(() => {
        getKits().then((res) => dispatch(addKitsAC(res)))
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