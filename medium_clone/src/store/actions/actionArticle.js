import axios from "axios";

export const allArticles = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/article/list")
            .then((response) => {
                dispatch({
                    type: "GET_ALL_ARTICLES",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const topArticle = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/article/top")
            .then((response) => {
                console.warn("check top article action", response);
                dispatch({
                    type: "GET_TOP_ARTICLE",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const popularArticle = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/article/popular")
            .then((response) => {
                dispatch({
                    type: "GET_POPULAR_ARTICLE",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const editorsPicks = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/article/editorspicks")
            .then((response) => {
                dispatch({
                    type: "GET_EDITORS_PICKS",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const articleTopic = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/article_topic")
            .then((response) => {
                dispatch({
                    type: "GET_ARTICLE_TOPIC",
                    payload: response.data,
                });
            })
            .catch((error) => console.warn(error));
    };
};

export const changeInputArticle = (e) => {
    return {
        type: "CHANGE_INPUT_ARTICLE",
        payload: e,
    };
};

export const fileSelectedHandler = (e) => {
    return {
        type: "CHANGE_INPUT_FILE",
        payload: e,
    };
};

export const postArticle = () => {
    return async(dispatch, getState) => {
        const token = localStorage.getItem("token");

        const inputData = new FormData();
        inputData.append("title", getState().article.title);
        inputData.append("createdAt", getState().article.created_at);
        inputData.append("updatedAt", getState().article.updated_at);
        inputData.append("image", getState().article.image);
        inputData.append("imageCaption", getState().article.image_caption);
        inputData.append("text", getState().article.text);

        axios({
            method: "POST",
            url: "http://0.0.0.0:5000/article",
            data: inputData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });
    };
};

export const getArticleByUser = (e) => {
    return async(dispatch, getState) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axios.get("http://0.0.0.0:5000/article/user", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            await dispatch({ type: "GET_USER_ARTICLE", payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
};