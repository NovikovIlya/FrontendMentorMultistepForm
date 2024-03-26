import CardComponent from '../../components/CardComponent/CardComponent';
import gif from '../../assets/giphy%20(7).gif'
import styles from './Plan.module.css'

function Plan() {


  return (
    <div className={styles.container}>  
     <CardComponent />
     <img src='https://media.glamour.com/photos/580e1f31114e233c0c9c84fc/master/w_320%2Cc_limit/giphy%2520(7).gif' alt='ss'/>
    </div>
  )
}

export default Plan
