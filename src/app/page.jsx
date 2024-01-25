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

//To restrict server side rendering
//1. use useEffect hook to set client true and call the item only when client true
//2. make hydrationTest component in which add hte component you want to render on only client side. Then call it using:
//const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationtest"), {ssr:false})
//<HydrationTestNoSSR/>
//3. "use client"
//<div suppressHydrationWarning></div>
//wrapping ssr component into csr wont affect it, it will still be ssr.


//Many links performance issue solve
//<Link prefetch={false}/>

//client side navigation
// const router = useRouter()
// router.push("/contact")
//router.replace("/contact")
//router.refresh()
//router.back()
//router.forward()
//usePathname()
//useSearchParams()

//server side navigation
// export default function Blog({params, searchParams})