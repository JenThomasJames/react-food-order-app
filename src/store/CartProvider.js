import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    quantity: 0,
    amount: 0
};

const cartReducer = (state, action) => {
    if (action.identifier === 'ADD') {
        const updatedCartAmount = state.amount + (action.item.price * action.item.quantity);
        let updatedItems = [];
        const itemIndex = state.items.findIndex(item => item.id === action.item.id);
        if (itemIndex > -1) {
            let existingItem = state.items[itemIndex];
            let updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            }
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        } else {
            let updatedItem = action.item;
            updatedItem.quantity = action.item.quantity;
            updatedItems = state.items.concat(updatedItem);
        }
        let updatedCart = {
            items: updatedItems,
            amount: updatedCartAmount
        };
        return updatedCart;
    }
}

const CartProvider = props => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCart({ identifier: 'ADD', item: item });
    }

    const removeItemFromCartHandler = (item) => {
        dispatchCart({ identifier: 'REMOVE', item: item });
    }

    const cartContextData = {
        items: cartState.items,
        totalAmount: cartState.amount,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContextData}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;