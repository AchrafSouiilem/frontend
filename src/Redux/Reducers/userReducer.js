import { GET_USER_FRIENDS, FRIENDS_LOAD, ADD_USER_FRIENDS } from "../constants/ActionTypes"

const initialState = {
    loadFriends: false,
    user: [],
}

const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FRIENDS_LOAD:
            return {...state, loadFriends: true}
        case GET_USER_FRIENDS:
            return {...state, loadFriends: false, user: payload}
        case ADD_USER_FRIENDS:
            return {...state, loadFriends: false, user: payload}
        default:
            return state
    }
}

export default userReducer

