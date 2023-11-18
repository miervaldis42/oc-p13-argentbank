// Imports
import { useState, useRef } from "react";

// Services
import fetchApiCall from "../../../services/apiHandler";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  switchEditMode,
  setFirstname,
  setLastname,
} from "../../../redux/userSlice";

// Styles
import styles from "./NameEditMode.module.css";

// Component
function NameEditMode() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);

  const enteredFirstnameRef = useRef();
  const enteredLastnameRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  // Reset error message
  const inputChangeHandle = () => {
    setErrorMessage(null);
  };

  // Save the modifications on the firstname & lastname
  const saveHandler = async (event) => {
    event.preventDefault();

    const newFirstname = enteredFirstnameRef.current?.value;
    const newLastname = enteredLastnameRef.current?.value;

    if (
      newFirstname !== null &&
      newFirstname.length > 0 &&
      newLastname !== null &&
      newLastname.length > 0
    ) {
      const newData = {
        userCredentials: token,
        newUserInfo: {
          firstName: newFirstname,
          lastName: newLastname,
        },
      };

      const data = await fetchApiCall(
        "modifyUserInfo",
        "/user/profile",
        newData
      );

      if (data.status === 200) {
        dispatch(setFirstname(data.body.firstName));
        dispatch(setLastname(data.body.lastName));
      } else {
        setErrorMessage("An error occurs during the modification.");
      }

      dispatch(switchEditMode(false));
    } else {
      setErrorMessage("Name(s) should not be empty.");
    }
  };

  // Leave the User Info Edit Mode
  const cancelHandler = () => {
    dispatch(switchEditMode(false));
  };

  return (
    <div className={styles.header}>
      <h1>Welcome back</h1>

      <form className={styles["edit-form"]}>
        <div className={styles["edit-inputs"]}>
          <input
            type="text"
            id="firstname"
            placeholder={user.firstname}
            ref={enteredFirstnameRef}
            onChange={inputChangeHandle}
            className={styles["edit-input"]}
          />
          <input
            type="text"
            id="lastname"
            placeholder={user.lastname}
            ref={enteredLastnameRef}
            onChange={inputChangeHandle}
            className={styles["edit-input"]}
          />
        </div>

        <div className={styles["action-buttons"]}>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <button onClick={saveHandler} className={styles["save-button"]}>
            Save
          </button>
          <button onClick={cancelHandler} className={styles["cancel-button"]}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NameEditMode;
