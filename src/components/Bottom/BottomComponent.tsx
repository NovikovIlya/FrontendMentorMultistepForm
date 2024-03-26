import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './BottomComponent.module.css'

const BottomComponent = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  return (
    <div>
      {pathname !== '/' && <button onClick={() => navigate(-1)}>Back</button>}
      {pathname === '/' && <Link to='/plan'>Go</Link>}
      {pathname === '/plan' && <Link to='/addons'>Go</Link>}
      {pathname === '/addons' && <Link to='/summary'>Go</Link>}
    </div>
  );
};

export default BottomComponent;
