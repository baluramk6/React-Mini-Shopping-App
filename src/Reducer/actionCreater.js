import axios from "axios";
import * as actionType from "./action";
let localhost = import.meta.env.VITE_APP_LOCAL_HOST;

const login = (data, dispatch, url, navigate) => {
    dispatch({ type: actionType.LOGIN_REQUEST });
    axios
        .get(url)
        .then((res) => {
            const user = res.data;
            user.forEach((element) => {
                if (
                    data.email === element.email &&
                    data.password === element.password
                ) {
                    alert("Login Successfull");
                    dispatch({ type: actionType.LOGIN_SUCCESS });
                    navigate("/product");
                    return;
                }
                if (user[user.length - 1].id === element.id) {
                    alert("incorrect user login details");
                    dispatch({ type: actionType.LOGIN_FAILURE });
                }
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.LOGIN_FAILURE });
        });
};

const getSlideImageRequest = (slides, dispatch) => {
    dispatch({ type: actionType.SLIDE_GET_REQUEST });
    axios
        .get(`${localhost}/${slides}`)
        .then((res) => {
            //console.log(res.data)
            dispatch({ type: actionType.SLIDE_GET_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.SLIDE_GET_FAILURE });
        });
};

const getProductRequest = (endpoint, dispatch, state) => {
    dispatch({ type: actionType.GET_PRODUCT_REQUEST });
    axios
        .get(`${localhost}/${endpoint}?_page=${state.page}&_limit=${state.limit}`)
        .then((res) => {
            //console.log(res.data)
            dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.GET_PRODUCT_FAILURE });
        });
};

const getSingleProduct = (dispatch, id, endpoint) => {
    dispatch({ type: actionType.GET_SINGLE_PRODUCT_REQUEST });

    axios
        .get(`${localhost}/${endpoint}/${id}`)
        .then((res) => {
            //console.log(res.data)
            dispatch({
                type: actionType.GET_SINGLE_PRODUCT_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.GET_SINGLE_PRODUCT_FAILURE });
        });
};

const getCartProduct = (endpoint, dispatch) => {
    dispatch({ type: actionType.GET_CART_PRODUCT_REQUEST });
    axios
        .get(`${localhost}/${endpoint}`)
        .then((res) => {
            //console.log(res.data)
            dispatch({
                type: actionType.GET_CART_PRODUCT_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.GET_CART_PRODUCT_FAILURE });
        });
};

const addToCart = (endpoint, dispatch, item) => {
    axios
        .post(`${localhost}/${endpoint}`, { ...item, qty: 1 })
        .then((res) => {
            //console.log(res);
            getCartProduct(endpoint, dispatch);
            alert("Product Added");
        })
        .catch((err) => {
            console.log(err);
            if (err.message === "Request failed with status code 500") {
                alert("Item already added");
                return;
            }
        });
};

const removeFromCart = (endpoint, id, dispatch) => {
    axios
        .delete(`${localhost}/${endpoint}/${id}`)
        .then((res) => {
            //console.log(res)
            alert("Item Removed");
            getCartProduct(endpoint, dispatch);
        })
        .catch((err) => {
            console.log(err);
        });
};

const pageChange = (type, dispatch, state) => {
    if (type === "PREV" && state.page === 1) {
        return;
    } else if (type === "PREV") {
        dispatch({ type: actionType.PAGE_PREV, payload: -1 });
    } else if (type === "NEXT") {
        dispatch({ type: actionType.PAGE_NEXT, payload: 1 });
    }
};

const limitChange = (dispatch, limit) => {
    dispatch({ type: "LIMIT", payload: limit });
};

const slideChange = (type, dispatch, state) => {
    if (type === "LEFT" && state.currentSlide === 0) {
        return dispatch({
            type: actionType.SLIDE_LAST,
            payload: state.slides.length - 1,
        });
    } else if (type === "LEFT") {
        dispatch({ type: actionType.SLIDE_CHANGE, payload: -1 });
    }

    if (type === "RIGHT" && state.currentSlide === state.slides.length - 1) {
        return dispatch({ type: actionType.SLIDE_FIRST, payload: 0 });
    } else if (type === "RIGHT") {
        dispatch({ type: actionType.SLIDE_CHANGE, payload: 1 });
    }
};

const changeQuantity = (id, endpoint, dispatch, data) => {
    axios
        .patch(`${localhost}/${endpoint}/${id}`, data)
        .then((res) => {
            //console.log(res.data)
            getCartProduct(endpoint, dispatch);
        })
        .catch((err) => {
            console.log(err);
        });
};

const getCheckoutdetails = (endpoint, dispatch) => {
    dispatch({ type: actionType.GET_CHECKOUT_DETAILS_REQUEST });
    axios
        .get(`${localhost}/${endpoint}`)
        .then((res) => {
            //console.log(res.data)
            dispatch({
                type: actionType.GET_CHECKOUT_DETAILS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: actionType.GET_CHECKOUT_DETAILS_FAILURE });
        });
};

const checkout = (endpoint, navigate, dispatch, data) => {
    axios
        .patch(`${localhost}/${endpoint}/1`, data)
        .then((res) => {
            //console.log(res.data)
            getCheckoutdetails(endpoint, dispatch);
            navigate("/checkout");
        })
        .catch((err) => {
            console.log(err);
        });
};

const buynow = (endpoint, dispatch, item, navigate) => {
    addToCart(endpoint, dispatch, item);
    getCheckoutdetails(endpoint, dispatch);
    navigate("/checkout");
};

const saveFormData = (e, endpoint, navigate, data) => {
    e.preventDefault();
    axios
        .post(`${localhost}/${endpoint}`, data)
        .then((res) => {
            //console.log(res.data);
            navigate("/payment");
        })
        .catch((err) => {
            console.log(err);
        });
};

const signup = (endpoint, dispatch, navigate, data) => {
    dispatch({ type: actionType.SIGNUP_REQUEST });

    axios
        .post(`${localhost}/${endpoint}`, data)
        .then((res) => {
            console.log(res.data);
            navigate("/login");
        })
        .catch((err) => {
            console.log(err);
        });
};

const placeOrder = (endpoint, dispatch, navigate) => {
    // axios.delete(`${localhost}/${endpoint}`).then((res) => {
    //     console.log(res.data)
    // }).catch((err) => {
    //     console.log(err)
    // })
    dispatch({ type: actionType.PALACE_ORDER_SUCCESS, })
    navigate("/thankyou")
}

export {
    login,
    signup,
    getSlideImageRequest,
    slideChange,
    getProductRequest,
    addToCart,
    removeFromCart,
    getCartProduct,
    pageChange,
    limitChange,
    getSingleProduct,
    changeQuantity,
    checkout,
    getCheckoutdetails,
    buynow,
    saveFormData,
    placeOrder,
};
