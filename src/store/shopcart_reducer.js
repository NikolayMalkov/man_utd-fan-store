const ADD_ITEM_TO_CART = 'ADD-ITEM_TO_CART';
const REMOVE_ITEM = 'REMOVE-ITEM';

export function addToCart(id, title, price) {
    return {
        type: ADD_ITEM_TO_CART,
        response: {id, title, price}
    }
}

export const removeFromCart = (id, price) => {
    return {
        type: REMOVE_ITEM,
        id,
        price
    }
}

const initialState = {
    items: [],
    totalPrice: 0
}

export default function shopcart_reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_ITEM_TO_CART: 
        const item = action.response
            return { 
            ...state, items: [...state.items, item], totalPrice: state.totalPrice + item.price
            }
        case REMOVE_ITEM:
            return {
                ...state, items: state.items.filter((item) => item.id !== action.id), totalPrice: state.totalPrice - action.price
            }

        default: return state
    }

}