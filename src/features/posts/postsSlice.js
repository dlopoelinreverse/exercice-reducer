import { createSlice, current } from "@reduxjs/toolkit";
import { fetchPatch } from "../../utils/fetcher";

const initialState = {
  postsData: [],
};

export const postsSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setPostsData: (state, action) => {
      state.postsData = [...action.payload];
    },
    edtitTitle: (state, action) => {
      const { id, title } = action.payload;
      const postToTouch = state.postsData.find((post) => post.id === id);
      // const res = fetchPatch(
      //   "https://jsonplaceholder.typicode.com/posts/" + id,
      //   body
      // ).then((res) => console.log(res));

      postToTouch.title = title;
    },
    edtitBody: (state, action) => {
      const { id, body } = action.payload;
      const postToTouch = state.postsData.find((post) => post.id === id);

      postToTouch.body = body;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPostsData, edtitTitle, edtitBody } = postsSlice.actions;

export default postsSlice.reducer;
