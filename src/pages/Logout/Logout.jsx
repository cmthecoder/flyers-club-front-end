import styles from './Logout.module.css'
import Bye from '../../assets/branding/bye.pngg'

const Logout = () => {
  return (
    <main className={styles.container}>
      <img src={Bye} alt="A flying with flyby again soon text" />
    </main>
  )
}

export default Logout