import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: 'About page',
  description: 'About Us',
}

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          earum quam exercitationem a assumenda, omnis laboriosam at ut labore
          et facilis odio sint temporibus consectetur maxime illo quis mollitia
          eos.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
}
