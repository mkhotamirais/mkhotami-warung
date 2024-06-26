import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  q: "",
  filterCategory: "",
  sortName: "",
  sortPrice: "",
  sortCategory: "",
  sortCreated: "",
  sortUpdated: "",
  query: {},
  queryString: "",
  queryTag: [],
  queryTagString: "",
  querySort: [],
  querySortString: "",
  queryResult: "",
  currentPage: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setQ(state, action) {
      state.q = action.payload;
    },
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
    setSortName(state, action) {
      state.sortName = action.payload;
    },
    setSortPrice(state, action) {
      state.sortPrice = action.payload;
    },
    setSortCategory(state, action) {
      state.sortCategory = action.payload;
    },
    setSortCreated(state, action) {
      state.sortCreated = action.payload;
    },
    setSortUpdated(state, action) {
      state.sortUpdated = action.payload;
    },
    setQuery(state, action) {
      state.query = { ...state.query, ...action.payload };
      const result = Object.entries(state.query)
        .map((item) => item.join("="))
        .join("&");
      state.queryString = result;
    },
    setQueryTag(state, action) {
      state.queryTag = action.payload;
      const result = state.queryTag.join("&tag=");
      if (state.queryString.length > 0) state.queryTagString = "&tag=" + result;
      else state.queryTagString = "?tag=" + result;
    },
    setQuerySort(state, action) {
      console.log(action.payload);
      state.querySort = { ...state.querySort, ...action.payload };
      console.log(Object.values(state.querySort));
      let result = Object.values(state.querySort)
        .filter((item) => item !== "")
        .join(" ");
      if (!result || result === "") result = "name";
      state.querySortString = result;
      console.log(result);
    },
    setQueryResult(state) {
      state.queryResult = state.queryString + state.queryTagString;
    },
    resetQuery() {
      return initialState;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setQ,
  setFilterCategory,
  setSortName,
  setSortPrice,
  setSortCategory,
  setSortCreated,
  setSortUpdated,
  setQuery,
  setQueryTag,
  setQueryResult,
  resetQuery,
  setQuerySort,
  setCurrentPage,
} = productSlice.actions;
export default productSlice.reducer;
