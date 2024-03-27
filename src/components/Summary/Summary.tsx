import styles from "./Summary.module.css";
import { useAppSelector } from "../../hooks/redux";

const Summary = () => {
  const { isYear, plan, checked } = useAppSelector((state) => state.sliceUrl);
  console.log("vvv", checked);
  const sumAddons = checked.reduce((acc: any, v: any) => acc + v.price, 0);
  const sumPlan = plan.price;
  const sumTotal = sumAddons + sumPlan;

  return (
    <>
      {plan.namePlan && checked.length > 0 ? (
        <>
          <div className={styles.container}>
            <div className={styles.plan}>
              <div>
                {plan.namePlan} ({isYear ? "Yearly" : "Monthly"})
              </div>
              <div>{plan.price * (isYear ? 10 : 1)}</div>
            </div>
            <div>
              <div>
                {checked.map((v: any) => (
                  <div className={styles.addons} key={v.name}>
                    <div>{v.name}</div> <div>{v.price * (isYear ? 10 : 1)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <div>Total ({isYear ? "Year" : "Month"})</div>
            <div>{sumTotal * (isYear ? 10 : 1)}</div>
          </div>
        </>
      ) : (
        <>You need to select a plan and add-ons</>
      )}
    </>
  );
};

export default Summary;
