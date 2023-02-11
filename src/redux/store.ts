import {configureStore} from "@reduxjs/toolkit";
import {AuthApi} from "../Services/AuthApi";
import {NewsApi} from "../Services/NewsApi";
import {categorySlice} from "./categorySlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [NewsApi.reducerPath]: NewsApi.reducer,
        [categorySlice.reducerPath]: categorySlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware, categorySlice.middleware, NewsApi.middleware)
})

setupListeners(store.dispatch)