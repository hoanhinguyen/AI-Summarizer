import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store is the global state that stores entire states of the application
// you only need a specific slice of a pie with the help of reducer. Eg., articleApi
export const store = configureStore(
    {
        reducer:{
            [articleApi.reducerPath]: articleApi.reducer
        },
        middleware:(getDefaultMiddleware) => 
            getDefaultMiddleware().concat(articleApi.middleware)
    }
);

