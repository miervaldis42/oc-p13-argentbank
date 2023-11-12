// Styling
import styles from "./FeatureItem.module.css";

// Component
function FeatureItem({ imgName, title, description }) {
  return (
    <div className={styles["feature-item"]}>
      <img
        src={require(`../../../assets/img/${imgName}`)}
        alt="Chat Icon"
        className={styles["feature-icon"]}
      />

      <h3 className={styles["feature-item-title"]}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;
