import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { setUsersData } from "./features/users/userSlice";
import { fetchData } from "./utils/fetcher";
import Routes from "./Routes";
import Navigation from "./components/Navigation";
import { setPostsData } from "./features/posts/postsSlice";
import EditModal from "./components/modals/EditModal";
import SelectionModal from "./components/modals/SelectionModal";

export default function App() {
  const modals = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users").then((data) =>
      dispatch(setUsersData(data))
    );
    fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
      dispatch(setPostsData(data))
    );
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Navigation />
        <Routes />
      </div>
      {modals.userChoice.isOpen && <SelectionModal />}
      {modals.editModal.isOpen && <EditModal />}
    </div>
  );
}
