import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.identifier === 'ADD') {
        const updatedCartItems = state.items.concat(action.item);
        const updatedCartAmount = state.totalAmount + action.item.price;
        return {
            items: updatedCartItems,
            amount: updatedCartAmount
        };
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