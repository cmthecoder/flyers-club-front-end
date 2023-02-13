import styles from './Landing.module.css'
import FlyersLogo from '../../assets/branding/flyers.png'


const Landing = ({ user }) => {
  return (
    <>
    <main className={styles.container}>
      <section className={styles.splash}>
        <img src={FlyersLogo} alt="A plane flying over water" />
      </section>
      <section className={styles.about}>
        <header>
          <h3>WHO WE ARE</h3>
          <h1>ABOUT US</h1>
        </header>
        <article>
          <p>The Flyers is a community where people who share a passion for aviation can meet and share their fun adventures or discuss changes in the world of aviation.
          </p>
        </article>
      </section>
    </main>
    <footer className={styles.footer}>
      <p>© 2023 FLYERS INC. ALL RIGHTS RESERVED</p>
    </footer>
    </>
  )
}

export default Landing
