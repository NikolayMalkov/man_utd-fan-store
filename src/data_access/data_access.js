import axios from "axios";


const instance = axios.create({
    baseURL: 'https://612a036e068adf001789ba01.mockapi.io/mu/api1/'
})


export const getKits = () => {
    return (
        instance({
            method: 'get',
            url: `kits`
        })
        .then(response => {
            return response.data
        })
    )
}

export const getTrainkits = () => {
    return (
        instance({
            method: 'get',
            url: `trainkits`
        })
        .then(response => {
            return response.data
        })
    )
}

export const getWomenkits = () => {
    return (
        instance({
            method: 'get',
            url: `womenkits`
        })
        .then(response => {
            return response.data
        })
    )
}