import { api } from "@/app/services/api";

type AuthState = {
    name: string;
    email: string;
};

type AuthResponse = {
    user: {
        name: string;
        email: string;
    };
    accessToken: string;
};

export const authApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthState>({
            query: (credentials) => ({
                url: "/auth",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice;
