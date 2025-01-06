/** @format */

import "./searchHistoryContainer.css";
import SearchHistory from "../searchHistory/searchHistory";
import usertextSlice, {
  addDiscription,
  addUserText,
} from "../redux/slices/usertextSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchHistoryContainer() {
  // const dispatch = useDispatch();
  const authState = useSelector((state) => state.authSlice.auth);
  const userTextState = useSelector((state) => state.usertextSlice.userText);
  const userDiscriptionState = useSelector(
    (state) => state.usertextSlice.userdiscription
  );

  const [pleaseSginIn, setpleaseSginIn] = useState(
    "please sign in to see your search history"
  );
  useEffect(() => {
    if (authState == true) {
      setpleaseSginIn("");
    }
  });


  return (
    <>
      <div id="searchPage">
        <h2>SearchHistory</h2>
        <h3>{pleaseSginIn}</h3>
        <div className="searchContainer">
          {userTextState.map((text, id = 0) => (
            <SearchHistory
              textState={text}
              DiscriptionState={userDiscriptionState[id]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchHistoryContainer;
