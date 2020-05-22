import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

export const doLogin = () => {
    return async(dispatch, getState) => {
        const dataEmail = getState().user.inputEmail;
        const dataPassword = getState().user.inputPassword;

        await axios
            .get(base_url + "auth", {
                params: {
                    email: dataEmail,
                    password: dataPassword,
                },
            })
            .then((response) => {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            })
            .catch((error) => {
                alert("Wrong email or password!");
            });
    };
};

export const doRegister = () => {
    return async(dispatch, getState) => {
        const dataEmail = getState().user.inputEmail;
        const dataPassword = getState().user.inputPassword;

        const bodyRequest = {
            email: dataEmail,
            password: dataPassword,
        };

        await axios.post(base_url + "user", bodyRequest).then((response) => {
            doLogin();
            dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
        });
    };
};

export const changeInputEmail = (e) => {
    return {
        type: "CHANGE_EMAIL_INPUT",
        payload: e,
    };
};

export const changeInputPassword = (e) => {
    return {
        type: "CHANGE_PASSWORD_INPUT",
        payload: e,
    };
};

export const doSignOut = () => {
    return {
        type: "LOGOUT_SUCCESS",
    };
};