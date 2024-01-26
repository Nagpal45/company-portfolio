import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data';

// async function getData(slug){
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`
//   )

//   if(!res.ok){
//       throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export default async function SinglePost({params}) {
  const {slug} = params;
  const post = await getPost(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/9827841/pexels-photo-9827841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="/noavatar.png" alt="" width={50} height={50}/>
          {post && (
          <Suspense fallback = {<div>Loading...</div>}>
          <PostUser userId ={post.userId}/>
          </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>17.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>
    </div>
  )
}
