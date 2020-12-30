
//Action Type
export const GET_RANDOM_COPY = 'GET_RANDOM_COPY'
export const POST_NEW_COPY = 'POST_NEW_COPY'
export const GET_USER_INFO = 'GET_USER_INFO'
export const LISTUP_COPIES = 'LISTUP_COPIES'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNUP = 'SIGNUP'
// export const URL = 'http://13.209.5.235:8080'
export const URL = 'http://localhost:8080'

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