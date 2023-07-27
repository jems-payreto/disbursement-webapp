// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { RootState } from "../store";
import { DisbursementFormValues } from "@/types";

type User = {
    name: string;
    age: number;
};

type TransformedResponse<T> = {
    data: T;
    statusCode?: number;
    statusText?: string;
    ok?: boolean;
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState() as RootState;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set("authorization", `Bearer tae`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUser: builder.query<TransformedResponse<User>, void>({
            query: () => {
                return {
                    url: "/",
                    // headers: { authorization: "Bearer token" },
                };
            },
            transformResponse: (response: User, meta) => {
                return {
                    data: response,
                    statusCode: meta?.response?.status,
                    statusText: meta?.response?.statusText,
                    ok: meta?.response?.ok,
                };
            },
            transformErrorResponse(response) {
                return response;
            },
        }),
        // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // // @ts-ignore
        login: builder.mutation({
            query: () => {
                return {
                    url: "/",
                    // headers: { authorization: "Bearer token" },
                };
            },
            transformResponse: (response: User, meta) => {
                return {
                    data: response,
                    statusCode: meta?.response?.status,
                    statusText: meta?.response?.statusText,
                    ok: meta?.response?.ok,
                };
            },
            transformErrorResponse(response) {
                return response;
            },
        }),

        getDisbursement: builder.query<DisbursementFormValues, void>({
            query: () => {
                return {
                    url: "/disbursement",
                };
            },
        }),

        createDisbursement: builder.mutation({
            query: (data: DisbursementFormValues) => {
                return {
                    url: "/disbursement",
                    method: "POST",
                    body: data,
                };
            },
            transformResponse: (response: User, meta) => {
                return {
                    data: response,
                    statusCode: meta?.response?.status,
                    statusText: meta?.response?.statusText,
                    ok: meta?.response?.ok,
                };
            },
            transformErrorResponse(response) {
                return response;
            },
        }),
    }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserQuery,
    useLoginMutation,
    useGetDisbursementQuery,
    useLazyGetDisbursementQuery,
    useCreateDisbursementMutation,
} = api;
