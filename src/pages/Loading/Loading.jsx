import styles from './Loading.module.css'
import LoadingIcon from '../../assets/branding/loading.png'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt="Plane flying with loading text" />
    </main>
  )
}

export default Loading