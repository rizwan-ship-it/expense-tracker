import { createSlice } from "@reduxjs/toolkit";

const expenseInitialState = {
  expenseList: [],
};
const expenseSlice = createSlice({
  name: "expense",
  initialState: expenseInitialState,

  reducers: {
    getExpenseList: function (state, action) {
      return state;
    },

    addExpense: function (state, action) {
      console.log("add action",action)
      state.expenseList = [...state.expenseList, action.payload.expensePayload];
    },
    deleteExpense: function (state, action) {
      const filteredList = state.expenseList.filter(
        (exp) => exp.id != action.payload.id,
      );
      state.expenseList = filteredList;
    },

    updateExpense: function (state, action) {
      const expensePayload = action.payload.expensePayload;
      console.log("update Expense", expensePayload);
      const modifiedExpenseList = state.expenseList.map((exp) =>
        exp.id === expensePayload.id ? { ...exp, ...expensePayload } : exp,
      );
      state.expenseList = modifiedExpenseList;
    },
  },
});

export const { getExpenseList, addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;

const expenseListReducer = expenseSlice.reducer;
export default expenseListReducer;
