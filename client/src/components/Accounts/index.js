// Imports
import { Children } from "react";

// Components
import Account from "./Account/index";

// Styles
import styles from "./Accounts.module.css";

// Component
function Accounts() {
  const accountsList = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <h2 className={styles["sr-only"]}>Accounts</h2>

      {Children.toArray(
        accountsList.map((a) => (
          <Account
            title={a.title}
            amount={a.amount}
            description={a.description}
          />
        ))
      )}
    </>
  );
}

export default Accounts;
