import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URI = "http://localhost:8800/api";
const API_URI = "https://taskmanager-mern-1.onrender.com";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI+"/api" });

export const apiSlice = createApi({
    reducerPath: 'api', // Add a unique key to the Redux store to identify this API slice
    baseQuery,
    tagTypes: [], // Add tags here if you need cache invalidation or refetching
    endpoints: (builder) => ({
        // Define your endpoints here
    }),
});

export default apiSlice;
