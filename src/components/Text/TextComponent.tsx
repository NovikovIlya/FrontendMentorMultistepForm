import styles from "./TextComponent.module.css";
import { useLocation } from "react-router-dom";

const TextComponent = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" && (
        <>
          <h1>Personal info</h1>
          <h3 className={styles.hh3}>Please provide your name, email address,and phone number</h3>
        </>
      )}
      {pathname === "/plan" && (
        <>
          <h1>Select your plan</h1>
          <h3 className={styles.hh3}>You have the option of monthly or yearly billing</h3>
        </>
      )}
      {pathname === "/addons" && (
        <>
          <h1>Pick add-ons</h1>
          <h3 className={styles.hh3}>Add-ons help enhance your gaming experience</h3>
        </>
      )}
      {pathname === "/summary" && (
        <>
          <h1>Finishing up</h1>
          <h3 className={styles.hh3}>Dounle-check everything looks OK before confirming</h3>
        </>
      )}
    </div>
  );
};

export default TextComponent;
