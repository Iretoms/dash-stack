import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, Favorite } from '@/lib/types'

export const jsonServerApi = createApi({
    reducerPath: 'jsonServerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products',
        }),
        getFavorites: builder.query<Favorite[], void>({
            query: () => '/favorites',
        }),
        toggleFavorite: builder.mutation<Favorite, Partial<Favorite>>({
            query: ({ id, isFavorite }) => ({
                url: `/favorites/${id}`,
                method: 'PATCH',
                body: { isFavorite },
            }),
        }),
     }),
   })

export const {
    useGetProductsQuery,
    useGetFavoritesQuery,
    useToggleFavoriteMutation,
} = jsonServerApi


        


// useUpdateProductMutation,
// updateProduct: builder.mutation<Product, Product>({
        //     query: (product) => ({
        //         url: `/products/${product.id}`,
        //         method: 'PUT',
        //         body: product,
        //     }),
        //     invalidatesTags: ['products'],
        // }),