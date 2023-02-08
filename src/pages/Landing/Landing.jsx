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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, omnis? Amet modi velit doloribus, error dolores eius hic rerum porro perferendis dolorum numquam, alias excepturi quia a aspernatur provident molestiae!
          </p>
        </article>
      </section>
    </main>
    <footer className={styles.footer}>
      <p>© 2022 FLYERS INC. ALL RIGHTS RESERVED</p>
    </footer>
    </>
  )
}

export default Landing
