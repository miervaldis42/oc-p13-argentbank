// Imports
import { Children } from "react";

// Components
import FeatureItem from "./FeatureItem/index";

// Styles
import styles from "./Features.module.css";

// Component
function Features() {
  const featureItems = [
    {
      imgName: "icon-chat.png",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      imgName: "icon-money.png",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      imgName: "icon-security.png",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <section className={styles.features}>
      <h2 className={styles["sr-only"]}>Features</h2>

      {Children.toArray(
        featureItems.map((featureItem) => (
          <FeatureItem
            imgName={featureItem.imgName}
            title={featureItem.title}
            description={featureItem.description}
          />
        ))
      )}
    </section>
  );
}

export default Features;
