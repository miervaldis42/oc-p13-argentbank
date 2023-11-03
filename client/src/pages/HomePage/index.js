// Redux
import { useSelector } from "react-redux";

function HomePage() {
  const identity = useSelector((state) => state.user);

  return (
    <>
      <h1>Home Page</h1>
      <p>
        {identity.lastname} {identity.firstname}
      </p>
    </>
  );
}

export default HomePage;
