import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './BottomComponent.module.css'

const BottomComponent = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  return (
    <div className={styles.btnSelf}>
      {pathname !== '/' && <button className={styles.back} onClick={() => navigate(-1)}>Back</button>}
      {pathname === '/' && <Link className={styles.link} to='/plan'>Next Step</Link>}
      {pathname === '/plan' && <Link className={styles.link} to='/addons'>Next Step</Link>}
      {pathname === '/addons' && <Link className={styles.link} to='/summary'>Next Step</Link>}
      {pathname === '/summary' && <Link to='/thanks' className={styles.link} >Confirm</Link>}
    </div>
  );
};

export default BottomComponent;
