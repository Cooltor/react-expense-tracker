import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "EXPENSE",
  initialState: {
    expenseList: [
      { name: "Apple", price: 3.99 },
      { name: "Banana", price: 2.99 },
    ],
  },
});

const expenseReducer = expenseSlice.reducer;

export { expenseReducer };