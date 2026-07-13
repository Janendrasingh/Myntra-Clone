import { createSlice, configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;
export default itemsSlice;
