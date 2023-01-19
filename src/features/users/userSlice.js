import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { users: [], user: undefined };

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users = [...action.payload];
    },
    setUser: (state, action) => {
      state.user = state.users.find((user) => user.id === action.payload);
    },
  },
});

export const { setUsersData, setUser } = userSlice.actions;

export default userSlice.reducer;
