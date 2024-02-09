import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            "id": 81,
            "name": "Mushroom Matar",
            "price": {
                "Half": 100,
                "Full": 150
            },
            "mrp": 120,
            "image": "images/mushroom.jpeg",
            "category": "Main Course",
            "description": "A flavorful combination of mushrooms and green peas cooked in a rich gravy.",
            "rating": 4.4,
            "availability": true
        },
        {
            "id": 82,
            "name": "Dal Makhani",
            "price": {
                "Half": 80,
                "Full": 130
            },
            "mrp": 120,
            "image": "images/dalmakhani.jpeg",
            "category": "Main Course",
            "description": "Creamy and flavorful lentil curry slow-cooked with spices and cream.",
            "rating": 4.5,
            "availability": true
        },
    ]
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        addItem(state, action) {
            state.items.push(action.payload);
        },
        updateItem(state, action) {
            const { id, updatedItem } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex] = { ...state.items[existingItemIndex], ...updatedItem };
            }
        },
        removeItem(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
    },
});

export const { setItems, addItem, updateItem, removeItem } = productsSlice.actions;

export const selectAllItems = state => state.products.items;


export const selectItemsByCategory = (state, category) =>
    state.products.items.filter(item => item.category === category);


export const selectAllCategories = state => {
    const allItems = selectAllItems(state);
    const categories = allItems.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category);
        }
        return acc;
    }, []);
    return categories;
};

export default productsSlice.reducer;
