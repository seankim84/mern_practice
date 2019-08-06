import axios from 'axios';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading()); // setItemsLoading을 실행. redux-thunk 덕분에 다른 액션생성함수를 가져다 사용할수가 있다.
    axios.get('/api/items') // proxy 설정을 따른다 'http://localhost:5000/api/items'
    .then(res => dispatch({ // server 측으로 보내야 하므로 dispatch 사용 후 payload로 res.data를 담는다.
        type: GET_ITEMS,
        payload: res.data  
    }))
   
}

export const addItem = item => dispatch => {
    axios.post('/api/items', item) //axios post시엔 post할 객체를 경로뒤에 써준다
    .then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
}

export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`)
    .then(res => dispatch({
        type:DELETE_ITEM,
        payload: id
    }))
}

// export const addItem = item => {
//     return {
//         type: ADD_ITEM,
//         payload: item
//     }
// }

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING 
    }
}