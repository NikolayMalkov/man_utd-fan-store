import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addKitsAC } from "../store/kits_reducer";
import ItemsCard from './ItemsCard';
import styles from './../css/content.module.css'

export default function Kits() {

    const dispatch = useDispatch();
    const Kits = useSelector(store => store.kits.items)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://612a036e068adf001789ba01.mockapi.io/mu/api1/kits'
        })
        .then((res) => dispatch(addKitsAC(res.data)))
    },[])


    return (

        <div className={styles.catalog_items}>
            {Kits === undefined ? null : Kits.map((kit) => <ItemsCard title={kit.title} img={kit.img} price={kit.price} /> )}
        </div>

    )
}