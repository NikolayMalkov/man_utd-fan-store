import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTrainKitsAC } from "../store/training_reducer";
import ItemsCard from './ItemsCard';
import styles from './../css/content.module.css'
import { getTrainkits } from "../data_access/data_access";

export default function Training() {

    const dispatch = useDispatch();
    const Kits = useSelector(store => store.training.items)

    useEffect(() => {
        getTrainkits()
        .then((res) => dispatch(addTrainKitsAC(res)))
    },[])


    return (

        <div className={styles.catalog_items}>
            {Kits === undefined ? null : Kits.map((kit) => <ItemsCard id={kit.id} key={kit.id} title={kit.title} img={kit.img} price={kit.price} /> )}
        </div>

    )
}