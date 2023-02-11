import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const NewsApi = createApi({
    reducerPath: 'NewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/posts",
        credentials: "include"
    }),

    endpoints: (builder) => ({
        // login: builder.mutation({
        //     query: (data) => ({
        //         url: '/login',
        //         method: 'POST',
        //         body: data
        //     }),
        // }),

        getAllNews: builder.query<any, void>({
            query: () => '/get'
        }),

        getPostByCategory: builder.query({
            query: (id) => `/getByCategory/${id}`
        }),
        getPostById: builder.query({
            query: (id) => `/get/${id}`
        }),
    })

})

export const {useGetAllNewsQuery, useGetPostByCategoryQuery, useGetPostByIdQuery} = NewsApi