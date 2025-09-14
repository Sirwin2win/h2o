import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    // baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
      endpoints: (builder) => ({
        // Define your endpoints here
        getProducts: builder.query({
          query: () => '/products', // Endpoint path
        }),
        getProductById: builder.query({
          query: (id) => `/products/${id}`,
        }),
    })
})

 export const { useGetProductsQuery, useGetProductByIdQuery } = api;