import  { ChangeEvent, useState } from "react";
import styles from "./Addons.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeChecked } from "../../store/sliceUrl";

const Addons = () => {
//   const [checked, setChecked] = useState<any[]>([]);
  const dispatch = useAppDispatch()
  const {checked,isYear} = useAppSelector((state) => state.sliceUrl)
  
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedChecked = [...checked];
    if (e.target.checked) {
      updatedChecked.push(e.target.value);
    } else {
      updatedChecked = updatedChecked.filter((v) => v !== e.target.value);
    }
    dispatch(changeChecked(updatedChecked))
    // setChecked(updatedChecked);
  };

  console.log(checked)
  return (
    <div>
      <div className={`${styles.card} ${checked.includes('online service') && styles.active}`}>
        <div className={styles.wrap}>
          <input className={styles.inp} value='online service' onChange={handleCheckbox} type="checkbox" />
          <div className={styles.block}>
            <div className={styles.head}>Online service</div>
            <div>Access to multiplayer games</div>
          </div>
        </div>
        <div>{isYear ? '+10/yr' : '+1/mo'}</div>
      </div>
      <div className={`${styles.card} ${checked.includes('large storage') && styles.active}`}>
        <div className={styles.wrap}>
          <input className={styles.inp} value='large storage' onChange={handleCheckbox} type="checkbox" />
          <div className={styles.block}>
            <div className={styles.head}>Large storage</div>
            <div>Extra 1TB of cloud save</div>
          </div>
        </div>
        <div>{isYear ? '+20/yr' : '+2/mo'}</div>
      </div>
      <div className={`${styles.card} ${checked.includes('customizable profile') && styles.active}`}>
        <div className={styles.wrap}>
          <input className={styles.inp} value='customizable profile' onChange={handleCheckbox} type="checkbox" />
          <div className={styles.block}>
            <div className={styles.head}>Customizable profile</div>
            <div>Custom theme on your profile</div>
          </div>
        </div>
        <div>{isYear ? '+30/yr' : '+3/mo'}</div>
      </div>
    </div>
  );
};

export default Addons;
