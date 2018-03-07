const STORE_ARTICLES = 'articles/STORE_ARTICLES'
const OPEN_ARTICLE = 'articles/OPEN_ARTICLE'
const EDIT_ARTICLE = 'articles/EDIT_ARTICLE'

const initialState = {
    articles: [],
    activeIndex: null
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case STORE_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }

        case OPEN_ARTICLE:
            return {
                ...state,
                activeIndex: action.payload
            }

        case EDIT_ARTICLE: {
            const newArticles = [ ...state.articles ]

            newArticles[state.activeIndex] = action.payload

            return {
                ...state,
                articles: newArticles
            }
        }
        
        default:
            return state;
    }
}

export const storeArticles = payload => ({
    type: STORE_ARTICLES,
    payload
})

export const openArticle = payload => ({
    type: OPEN_ARTICLE,
    payload
})

export const editArticle = payload => ({
    type: EDIT_ARTICLE,
    payload
})