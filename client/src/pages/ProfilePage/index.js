// Redux
import { useSelector } from "react-redux";

// Components
import Welcome from "../../components/Welcome/";
import NameEditMode from "../../components/Welcome/NameEditMode";
import Accounts from "../../components/Accounts/index";

// Layout
import MainLayout from "../layouts/MainLayout";

// Styles
import styles from "./ProfilePage.module.css";

// Page
function ProfilePage() {
  const isEditMode = useSelector((state) => state.user.isEditMode);

  return (
    <MainLayout customStyle={styles["bg-dark"]}>
      {!isEditMode ? <Welcome /> : <NameEditMode />}

      <Accounts />
    </MainLayout>
  );
}

export default ProfilePage;
