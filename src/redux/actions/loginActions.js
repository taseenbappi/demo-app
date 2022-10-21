export const USER_REGISTER = "USER_REGISTER";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_DATA = "LOGIN_DATA";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const userRegAction = (data) => {

    return {
        type: USER_REGISTER,
        payload: data
    }
}

export const userRequestAction = () => {

    return {
        type: LOGIN_REQUEST
    }
}
export const userDataAction = (data) => {

    return {
        type: LOGIN_DATA,
        payload: data
    }
}
export const userFailedAction = (error) => {

    return {
        type: LOGIN_FAILED,
        payload: error
    }
}