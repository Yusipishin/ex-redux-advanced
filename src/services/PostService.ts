import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

export const postAPI = createApi({
    reducerPath: 'postAPI', // уникальный ключ
    baseQuery: fetchBaseQuery({
        baseUrl: ' http://localhost:5000'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})