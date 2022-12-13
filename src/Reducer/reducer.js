import * as actionType from "../Reducer/action"

export const reducer = (state, action) => {

    switch (action.type) {
        case actionType.EMAIL_ONCHANGE:
            return {
                ...state, email: action.payload
            }
        case actionType.PASSWORD_ONCHANGE:
            return {
                ...state, password: action.payload
            }
        case actionType.LOGIN_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, isAuth: true
            }
        case actionType.LOGIN_FAILURE:
            return {
                ...state, isError: true, isAuth: false, token: null
            }
        case actionType.LOGOUT:
            return {
                ...state, isAuth: false, token: null
            }
        case actionType.SLIDE_GET_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.SLIDE_GET_SUCCESS:
            return {
                ...state, isLoading: false, slides: action.payload
            }
        case actionType.SLIDE_GET_FAILURE:
            return {
                ...state, isError: true, slides: null
            }
        case actionType.SLIDE_CHANGE:
            return {
                ...state, currentSlide: state.currentSlide + action.payload
            }
        case actionType.SLIDE_LAST:
            return {
                ...state, currentSlide: action.payload
            }
        case actionType.SLIDE_FIRST:
            return {
                ...state, currentSlide: action.payload
            }
        case actionType.GET_PRODUCT_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.GET_PRODUCT_SUCCESS:
            return {
                ...state, isLoading: false, products: action.payload
            }
        case actionType.GET_PRODUCT_FAILURE:
            return {
                ...state, isError: true, products: null
            }
        case actionType.GET_CART_PRODUCT_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.GET_CART_PRODUCT_SUCCESS:
            return {
                ...state, isLoading: false, cartProduct: action.payload
            }
        case actionType.GET_CART_PRODUCT_FAILURE:
            return {
                ...state, isError: true, cartProduct: null
            }
        case actionType.ADD_TO_CART:
            return {
                ...state, cartProduct: action.payload
            }
        case actionType.PAGE_PREV:
            return {
                ...state, page: state.page + action.payload
            }
        case actionType.PAGE_NEXT:
            return {
                ...state, page: state.page + action.payload
            }
        case actionType.LIMIT:
            return {
                ...state, limit: action.payload
            }
        case actionType.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state, isLoading: false, singleProduct: action.payload
            }
        case actionType.GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state, isError: true, singleProduct: null
            }
        case actionType.GET_CHECKOUT_DETAILS_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.GET_CHECKOUT_DETAILS_SUCCESS:
            return {
                ...state, isLoading: false, checkoutData: action.payload
            }
        case actionType.GET_CHECKOUT_DETAILS_FAILURE:
            return {
                ...state, isError: true, checkoutData: null
            }
        case actionType.FIRSTNAME_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, firstName: action.payload
            }
        case actionType.LASTNAME_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, lastName: action.payload
            }
        case actionType.FORM_EMAIL_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, formEmail: action.payload
            }
        case actionType.MOBILE_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, mobile: action.payload
            }
        case actionType.ADDRESS_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, address: action.payload
            }
        case actionType.CITY_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, city: action.payload
            }
        case actionType.COUNTRY_ONCHANGE:
            return {
                ...state, isError: false, isLoading: false, country: action.payload
            }
        case actionType.SIGNUP_REQUEST:
            return {
                ...state, isLoading: true
            }
        case actionType.SIGNUP_SUCCESS:
            return {
                ...state, isLoading: false, isAuth: true, token: action.payload
            }
        case actionType.SIGNUP_FAILURE:
            return {
                ...state, isError: true, isAuth: false, token: null
            }
        case actionType.PALACE_ORDER_REQUEST:
            return {
                state
            }
        case actionType.PALACE_ORDER_SUCCESS:
            return {
                ...state, isError: false, isLoading: false, checkoutData: null, cartProduct: null
            }
        case actionType.PALACE_ORDER_FAILURE:
            return {
                state
            }
        default:
            return state;
    }
}

