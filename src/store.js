// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the cartReducer from your CartSlice
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        // The 'cart' slice of state is managed by cartReducer
        cart: cartReducer,
    },
});

// Export the store for use in the application
export default store;
