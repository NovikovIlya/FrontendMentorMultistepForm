import { Link } from 'react-router-dom'
import styles from './Thanks.module.css'

const Thanks = () => {
  return (
    <div className={styles.container}>
        <img src='https://media.glamour.com/photos/580e1f31114e233c0c9c84fc/master/w_320%2Cc_limit/giphy%2520(7).gif' alt='ss'/>
        <Link to='/'>Restart</Link>
    </div>
  )
}

export default Thanks