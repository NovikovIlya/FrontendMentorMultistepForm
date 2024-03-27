import styles from "./Arcade.module.css";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";
import { Switch } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeIsYear, changePlan } from "../../store/sliceUrl";

const Arcade = () => {
  const { isYear, plan } = useAppSelector((state) => state.sliceUrl);
  const dispatch = useAppDispatch();

  const handleCard = (e: any) => {
    dispatch(changePlan({ namePlan: e.target.id,price: e.target.id==="arcade"?9:e.target.id==="advanced"?12:15 }));
  };

  const onChange = (checked: boolean) => {
    dispatch(changeIsYear(checked));
  };

  return (
    <div>
      <div className={styles.top}>
        <div
          id="arcade"
          onClick={handleCard}
          className={`${styles.card} ${plan.namePlan === "arcade" && styles.acive}`}
        >
          <img className={styles.icon} src={arcade} />

          <div className={styles.text}>
            <div>Arcade</div>
            <div>{isYear ? "$90/yr" : "$9/mo"}</div>
            {isYear && <div>2 moths free</div>}
          </div>
        </div>
        <div
          id="advanced"
          onClick={handleCard}
          className={`${styles.card} ${plan.namePlan === "advanced" && styles.acive}`}
        >
          <img className={styles.icon} src={advanced} />

          <div className={styles.text}>
            <div>Advanced</div>
            <div>{isYear ? "$120/yr" : "$12/mo"}</div>
            {isYear && <div>2 moths free</div>}
          </div>
        </div>
        <div
          id="pro"
          onClick={handleCard}
          className={`${styles.card} ${plan.namePlan === "pro" && styles.acive}`}
        >
          <img className={styles.icon} src={pro} />

          <div className={styles.text}>
            <div>Pro</div>
            <div>{isYear ? "$150/yr" : "$15/mo"}</div>
            {isYear && <div>2 moths free</div>}
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        <span>Monthly</span> <Switch value={isYear} onChange={onChange} />{" "}
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default Arcade;
