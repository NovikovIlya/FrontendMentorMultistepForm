import styles from "./Left.module.css";
import { useLocation } from "react-router-dom";

const LeftComponent = () => {
 
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className={styles.left}>
      <div className={styles.leftHead}>
        <div className={`${styles.circle} ${pathname === '/' && styles.active}`}>
          1
        </div>
        <div className={styles.article}>
          <div className={styles.step}>STEP 1</div>
          <div className={styles.plan}>YOUR INFO</div>
        </div>
      </div>
      <div className={styles.leftHead}>
        <div className={`${styles.circle} ${pathname === '/plan' && styles.active}`}>
          2
        </div>
        <div className={styles.article}>
          <div className={`${styles.step} `}>STEP 2</div>
          <div className={styles.plan}>SELECT PLAN</div>
        </div>
      </div>
      <div className={styles.leftHead}>
        <div className={`${styles.circle} ${pathname === '/addons' && styles.active}`}>
          3
        </div>
        <div className={styles.article}>
          <div className={`${styles.step} `}>STEP 3</div>
          <div className={styles.plan}>ADDONS</div>
        </div>
      </div>
      <div className={styles.leftHead}>
        <div className={`${styles.circle} ${pathname === '/summary' && styles.active}`}>
          4
        </div>
        <div className={styles.article}>
          <div className={styles.step}>STEP 4</div>
          <div className={styles.plan}>SUMMARY</div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
