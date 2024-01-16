import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at sapiente fugit culpa, cupiditate earum quod adipisci! Voluptate inventore in debitis quasi odit nesciunt! Aliquam voluptate necessitatibus deserunt consectetur minus.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  )
}
