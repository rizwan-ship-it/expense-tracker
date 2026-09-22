import { configureStore } from "@reduxjs/toolkit";
import expenseListReducer from "./features/expense/expenseListSlice";

const store = configureStore({
  reducer: {
    expense: expenseListReducer,
   
  },
});
export default store;
