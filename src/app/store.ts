import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import disbursementReducer from "@/features/disbursement/disbursementSlice";
import authReducer from "@/features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        disbursement: disbursementReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
