import Blogpost from '@/components/blogPost/blogPost'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// async function getData(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", 
//     // {cache: "no-store"} -> gives fresh data
//     // {next: {revalidate: 3600}} -> 
//     )

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }

export const metadata = {
    title: 'Blog page',
    description: 'See our blogs',
  }

export default async function Blog(){
    // const posts = await getData()
    const posts = await getPosts();

    return(
        <div className={styles.container}>
        {posts.map((post) => (
            <div className={styles.post} key={post.id}>
            <Blogpost post={post}/>
            </div>
        ))}
        </div>
    )
}