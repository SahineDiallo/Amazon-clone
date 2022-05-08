export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'SET_USER': 
            return {
                ...state,
                user: action.user,
            };

        case 'REMOVE_FROM_BASKET':
            
            const _index = state.basket.findIndex(basket => basket.id === action.id)
            
            let new_basket = [...state.basket]
            if (_index >= 0 ) {
                new_basket.splice(_index, 1)
            } else {
                console.warn("This item is not present in your basket");
            }
            return {
                ...state,
                basket:new_basket,
            };
        default: 
            return state;
    }
};
export default reducer;

