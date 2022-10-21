import { LOGIN_DATA, LOGIN_FAILED, LOGIN_REQUEST, USER_REGISTER } from "../actions/loginActions";

const initializeState = {
    user: {
        username: "",
        password: ""
    },

    isLoading: false,
    error: null
}

const loginReducer = (state = initializeState, action) => {

    switch (action.type) {

        case USER_REGISTER:
            return {
                ...state, user: action.payload
            }

        case LOGIN_REQUEST:
            return {
                ...state, isLoading: true
            }

        case LOGIN_DATA:
            return {
                ...state, user: action.payload, isLoading: false
            }

        case LOGIN_FAILED:
            return {
                ...state, error: action.payload, isLoading: false
            }

        default:
            return state;
    }

}
export default loginReducer;