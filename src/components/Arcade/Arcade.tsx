import React from 'react'
import styles from './Arcade.module.css'
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'

const Arcade = () => {
  const handleCard = ()=>{
    
  }

  return (
    <div>
        <div className={styles.top}>
            <div className={styles.card}>
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
        <div className={styles.bot}></div>
    </div>
  )
}

export default Arcade