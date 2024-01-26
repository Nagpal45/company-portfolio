import Image from 'next/image'
import styles from './blogPost.module.css'
import Link from 'next/link'

export default function Blogpost({post}) {
  return (
    <div className={styles.container} >
        <div className={styles.top}>
            {post.img && (<div className={styles.imgContainer}>
                <Image src={post.img} fill className={styles.img} alt=""/>
            </div>)}
            <span className={styles.date}>17.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}
