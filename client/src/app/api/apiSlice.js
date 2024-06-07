import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: `http://localhost:3000/api/warungota`,
    baseUrl: `https://mkhotami-warung-server.vercel.app/api/warungota`,
    credentials: "include",
  }),
  tagTypes: ["User", "Product", "Category", "Tag"],
  endpoints: () => ({}),
});
