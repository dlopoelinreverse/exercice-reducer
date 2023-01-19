import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChoice: {
    userSelected: false,
    isOpen: true,
  },
  editModal: {
    postData: undefined,
    isOpen: false,
    isEditing: { title: false, body: false },
  },
};

export const modalsSlice = createSlice({
  name: "modalsReducer",
  initialState,
  reducers: {
    setUserSelection: (state, action) => {
      state.userChoice.userSelected = action.payload;
      state.userChoice.isOpen = state.userChoice.userSelected
        ? (state.userChoice.isOpen = false)
        : (state.userChoice.isOpen = true);
    },
    setEditModal: (state, action) => {
      state.editModal.postData = action.payload;
      state.editModal.isOpen = state.editModal.postData
        ? (state.editModal.isOpen = true)
        : (state.editModal.isOpen = false);
    },
    closeEditModal: (state, action) => {
      state.editModal.postData = undefined;
      state.editModal.isOpen = false;
    },
    setEditPost: (state, action) => {
      const { id } = action.payload;
      switch (id) {
        case "title":
          state.editModal.isEditing.title = !state.editModal.isEditing.title;
          break;
        case "body":
          state.editModal.isEditing.body = !state.editModal.isEditing.body;
          break;
        default:
          return state;
      }
    },
    updatePostData: (state, action) => {
      state.editModal.postData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserSelection,
  setEditModal,
  closeEditModal,
  setEditPost,
  updatePostData,
} = modalsSlice.actions;

export default modalsSlice.reducer;
