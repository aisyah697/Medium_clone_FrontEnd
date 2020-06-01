import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

export const doLogin = () => {
    return async(dispatch, getState) => {
        const dataEmail = getState().user.inputEmail;
        const dataPassword = getState().user.inputPassword;
        try {
            const response = await axios.get(base_url + "auth", {
                params: {
                    email: dataEmail,
                    password: dataPassword,
                },
            });
            await dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("is_login", true);
        } catch (error) {
            alert("Wrong email or password!");
        }
    };
};

export const doRegister = () => {
    return async(dispatch, getState) => {
        const inputData = new FormData();
        inputData.append("email", getState().user.inputEmail);
        inputData.append("password", getState().user.inputPassword);

        const responseRegister = await axios({
            method: "POST",
            url: base_url + "user",
            data: inputData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (responseRegister.status === 200) {
            return true;
        }
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
    localStorage.removeItem("token");
    localStorage.removeItem("is_login");
    return {
        type: "LOGOUT_SUCCESS",
    };
};

export const getUser = () => {
    return async(dispatch, getState) => {
        const token = localStorage.getItem("token");

        await axios
            .get("http://0.0.0.0:5000/user", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(async(response) => {
                await dispatch({ type: "GET_USER_DATA", payload: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};