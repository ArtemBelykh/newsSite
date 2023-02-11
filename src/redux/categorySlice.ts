import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const categorySlice = createApi({
    reducerPath: 'categorySlice',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/category",
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

        getAllCategory: builder.query<any,void>({
            query: () => '/getAll'
        })
    }),
})

export const {useGetAllCategoryQuery} = categorySlice