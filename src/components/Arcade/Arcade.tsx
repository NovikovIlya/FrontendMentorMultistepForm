import React, { useState } from 'react'
import styles from './Arcade.module.css'
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'
import { Switch } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { changeIsYear } from '../../store/sliceUrl'

const Arcade = () => {
  // const [checked, setChecked] = useState(false);
  const {isYear} = useAppSelector((state) => state.sliceUrl)
  const dispatch= useAppDispatch()
  const handleCard = ()=>{
    
  }
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    dispatch(changeIsYear(checked))
    // setChecked(checked);
  };

  return (
    <div>
        <div className={styles.top}>
            <div className={`${styles.card} ${styles.acive}`}>
                <img className={styles.icon} src={arcade}/>

                <div>
                 <div>Arcade</div>
                 <div>9/mo</div>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.icon} src={advanced}/>
                
                <div>
                 <div>Advanced</div>
                 <div>12/mo</div>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.icon} src={pro}/>
                
                <div>
                 <div>Pro</div>
                 <div>15/mo</div>
                </div>
            </div>
        </div>
        <div className={styles.bot}>
               <span>Monthly</span>  <Switch value={isYear} onChange={onChange} />  <span>Yearly</span>
        </div>
    </div>
  )
}

export default Arcade