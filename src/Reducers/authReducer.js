const initialState = {
    email: 'admin@admin.com',
    password: '123123'
}

const AuthReducer = (state = [], action) => {
    
    if (state.length == 0) {
        return initialState;
    }

    if (action.type == 'editEmail') {
        return {
            ...state, email:action.payload.email
        }
    }

    if (action.type == 'editPassword') {
        return {
            ...state, password:action.payload.password
        }
    }

    return state;
}

export default AuthReducer;