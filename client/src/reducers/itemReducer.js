import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState  = { // 이 전체가 item 이다
    items: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false // loading이 이미 끝났으므로 다시 false
            }
        case DELETE_ITEM: 
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM: 
            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case ITEMS_LOADING: 
            return {
                ...state,
                loading: true
            }
        default: return { ...state }
    }

}



