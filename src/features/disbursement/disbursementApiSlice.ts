import { api } from "@/app/services/api";

export const disbursementApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        test: builder.query<string, null>({
            query: () => ({
                url: "/test",
            }),
        }),
    }),
});

export const { useTestQuery } = disbursementApiSlice;
