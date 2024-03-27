import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div className={styles.wrap}>
        <label className={styles.lab} htmlFor="my">Name</label>
        <br></br>
        <input placeholder="e.g Stephen King" className={styles.inp} type="text" id="my" />
      </div>

      <div  className={styles.wrap}>
        <label className={styles.lab} htmlFor="mail">Email</label>
        <br></br>
        <input placeholder="e.g stephtnking@lorem.com" className={styles.inp}  type="text" id="mail" />
      </div>

      <div  className={styles.wrap}>
        <label className={styles.lab} htmlFor="phone">Phone</label>
        <br></br>
        <input placeholder="e.g +1 234 567 890" className={styles.inp}  type="text" id="phone" />
      </div>
    </>
  );
};

export default Form;
