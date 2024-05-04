import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    subtotal: 0,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                // If the item is not already in the cart, add it with a quantity of 1

                state.cartItems.push({...newItem, amount: 1, subtotal: newItem.price }); // Ensure newItem has an 'amount' property
            } else {
                // If the item exists, increment its quantity
                existingItem.amount += 1;
                existingItem.subtotal = existingItem.price * existingItem.amount;
            }
            // Recalculate the total after adding the item
            const updatedTotal = state.cartItems.reduce(
                (total, item) => total + item.price * item.amount,0
            );
            state.total = updatedTotal;
            state.subtotal = state.cartItems.reduce((total, item) => total + item.subtotal, 0);
            state.amount = state.cartItems.reduce((total, item) => total + item.amount, 0);
        },
        // You might want to add actions for removing items or adjusting their quantity
        clearOneItem(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
        },
        clearItems(state) {
            state.cartItems = [];
            state.total = 0;
            state.sumProduct = 0;
            state.amount = 0;
            state.isLoading = false;
        },
        increaseAmount(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem) {
                existingItem.amount += 1;
                existingItem.subtotal = existingItem.price * existingItem.amount;
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
            }
        },
        decreaseAmount(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem.amount > 1) {
                existingItem.amount -= 1;
                existingItem.subtotal = existingItem.price * existingItem.amount;
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
            }
        },
    },
});

export const { addItemToCart, clearItems, clearOneItem, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;