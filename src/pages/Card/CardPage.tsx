import React from 'react'
import styles from './CardPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import BottomComponent from '../../components/Bottom/BottomComponent';

const CardPage = ({isStep = 1}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHead}>
            <div className={`${styles.circle} ${isStep === 1 && styles.active}`}>1</div>
            <div className={styles.article}>
              <div  className={styles.step}>STEP 1</div>
              <div className={styles.plan}>YOUR INFO</div>
            </div>
          </div>
          <div className={styles.leftHead}>
            <div className={`${styles.circle} ${isStep === 2 && styles.active}`}>2</div>
            <div className={styles.article}>
              <div className={`${styles.step} `}>STEP 2</div>
              <div className={styles.plan}>SELECT PLAN</div>
            </div>
          </div>
          <div className={styles.leftHead}>
            <div className={`${styles.circle} ${isStep === 3 && styles.active}`}>3</div>
            <div className={styles.article}>
              <div  className={`${styles.step} `}>STEP 3</div>
              <div className={styles.plan}>ADDONS</div>
            </div>
          </div>
          <div className={styles.leftHead}>
            <div className={`${styles.circle} ${isStep === 4 && styles.active}`}>4</div>
            <div className={styles.article}>
              <div  className={styles.step}>STEP 4</div>
              <div className={styles.plan}>SUMMARY</div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
              <BottomComponent />
        </div>
    </div>
  )
}

export default CardPage