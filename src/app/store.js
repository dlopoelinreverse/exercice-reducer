import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/userSlice";
import postsReducer from "../features/posts/postsSlice";
import modalsReducer from "../features/modals/modalsSlice";

export const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
    postsReducer: postsReducer,
    modalsReducer: modalsReducer,
  },
});
