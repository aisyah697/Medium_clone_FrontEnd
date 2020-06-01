const initialArticleState = {
    articleList: [],
    topArticle: [],
    popularArticle: [],
    editorsPicks: [],
    topicList: [],
    title: "",
    image: "",
    image_caption: "",
    text: "",
    topic: "",
    is_loading: false,
    statusError: true,
};

export default function articleReducer(
    articleState = initialArticleState,
    action
) {
    switch (action.type) {
        case "GET_ALL_ARTICLES":
            return {
                ...articleState,
                articleList: action.payload,
            };
        case "GET_TOP_ARTICLE":
            return {
                ...articleState,
                topArticle: action.payload,
            };
        case "GET_POPULAR_ARTICLE":
            return {
                ...articleState,
                popularArticle: action.payload,
            };
        case "GET_EDITORS_PICKS":
            return {
                ...articleState,
                editorsPicks: action.payload,
            };
        case "GET_ARTICLE_TOPIC":
            return {
                ...articleState,
                topicList: action.payload,
            };
        case "CHANGE_INPUT_ARTICLE":
            return {
                ...articleState,
                [action.payload.target.name]: action.payload.target.value,
            };
        case "CHANGE_INPUT_FILE":
            return {
                ...articleState,
                [action.payload.target.name]: action.payload.target.files[0],
            };
        case "POST_ARTICLE_SUCCESS":
            return {
                ...articleState,
                statusError: false,
            };
        case "GET_USER_ARTICLE":
            return {
                ...articleState,
                articleByUser: action.payload,
            };
        case "IS_LOADING":
            return {
                ...articleState,
                is_loading: true,
            };
        default:
            return articleState;
    }
}