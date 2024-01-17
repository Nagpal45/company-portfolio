import Image from 'next/image'
import styles from './blogPost.module.css'
import Link from 'next/link'

export default function Blogpost() {
  return (
    <div className={styles.container} >
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/9827841/pexels-photo-9827841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill className={styles.img} alt=""/>
            </div>
            <span className={styles.date}>17.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Eyes</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum sint ullam ea cumque officia iure sed explicabo nemo. Reiciendis repellat harum cumque amet! Enim sed corrupti magnam aliquam consequatur!</p>
            <Link className={styles.link} href="/blog/post">Read More</Link>
        </div>
    </div>
  )
}
