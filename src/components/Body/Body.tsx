import { useLocation } from "react-router-dom";
import Form from "../Form/Form";
import styles from './Body.module.css'
import Arcade from "../Arcade/Arcade";
import Addons from "../Addons/Addons";
import Summary from "../Summary/Summary";

const Body = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.ss}>
      {pathname === "/" && (
        <Form />
      )}
      {pathname=== '/plan' &&
      <>
        <Arcade/>
      </>}
      {pathname=== '/addons' &&
      <>
        <Addons/>
      </>}
      {pathname=== '/summary' &&
      <>
        <Summary/>
      </>}
    </div>
  );
};

export default Body;
