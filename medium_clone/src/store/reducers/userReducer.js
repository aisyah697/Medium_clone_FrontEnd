const initialState = {
    email: "",
    password: "",
    is_login: false,
};

export default function userReducer(userState = initialState, action) {
    switch (action.type) {
        case "CHANGE_EMAIL_INPUT":
            return {
                ...userState,
                inputEmail: action.payload.target.value,
            };
        case "CHANGE_PASSWORD_INPUT":
            return {
                ...userState,
                inputPassword: action.payload.target.value,
            };
        case "LOGIN_SUCCESS":
            return {
                ...userState,
                token: action.payload.token,
                is_login: true,
            };
        case "LOGOUT_SUCCESS":
            return {
                ...userState,
                is_login: false,
            };
        case "REGISTER_SUCCESS":
            return userState;
        default:
            return userState;
    }
}