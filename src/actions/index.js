
//Action Type
export const GET_RANDOM_COPY = 'GET_RANDOM_COPY'
export const POST_NEW_COPY = 'POST_NEW_COPY'
export const GET_USER_INFO = 'GET_USER_INFO'
export const LISTUP_COPIES = 'LISTUP_COPIES'
export const UPDATE_LIKE_COUNT = 'UPDATE_LIKE_COUNT'
export const UPDATE_BOOKMARK_LIST = 'UPDATE_BOOKMARK_LIST'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNUP = 'SIGNUP'
// export const URI = 'http://13.209.5.235:8080'
export const URI = 'https://copymind.herokuapp.com'

// export const URI = 'http://localhost:8080'

export const actionGetRandomCopy = (copy) => ({
    type:GET_RANDOM_COPY,
    copy
})

export const actionPostNewCopy = (postData) => ({
    type:POST_NEW_COPY,
    postData
})

export const actionGetUserInfo = (userInfo) => ({
    type:GET_USER_INFO,
    userInfo
})

export const actionListupCopies = (copyArr) => ({
    type:LISTUP_COPIES,
    copyArr
})

export const actionLogin = (isLogin) => ({
    type:LOGIN,
    isLogin
})

export const actionLogout = (isLogin) => ({
    type:LOGOUT,
    isLogin
})

export const actionSignUp = (signup) => ({
    type:SIGNUP,
    signup
})

export const updateLikeCount = (count) => ({
    type:UPDATE_LIKE_COUNT,
    count
})

export const updateBookmarkList = (bookmarkList) => ({
    type:UPDATE_BOOKMARK_LIST,
    bookmarkList
})