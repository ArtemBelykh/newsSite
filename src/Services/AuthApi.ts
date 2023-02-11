import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


// @ts-ignore
export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
        credentials: "include"
    }),

    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/registration',
                method: 'POST',
                body: data
            })
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
        }),

        refresh: builder.query<any,void>({
            query: () => '/refresh'
        }),
        // refreshTest: builder.query<any,void>({
        //     query: () => '/refresh',
        //     transformResponse(apiResponse, meta) { // Вот функция transformResponse
        //         return {apiResponse, meta}
        //     }
        // }),


        logout: builder.mutation<any,void>({
            query: () => ({
                url: '/logout',
                method: 'POST'
            }),
        })
    }),
})

export const {useRegisterMutation, useLoginMutation, useRefreshQuery, useLogoutMutation} = AuthApi