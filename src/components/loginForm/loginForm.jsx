"use client"
import styles from './loginForm.module.css'
import { login } from "@/lib/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {useFormState} from "react-dom"

export default function LoginForm() {
    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter();

    // useEffect(()=>{
    //     state?.success && router.push("/blog")
    // },[state?.success, router])

  return (
    <div>
        <form action={formAction} className={styles.form}>
        <input type="text" placeholder="username" name="username"/>
        <input type="password" placeholder="password" name="password"/>
        <button>Login</button>
        {state?.error}
      <Link href="/register">Don&apos;t have an account? <b>Register</b> </Link>
      </form>
    </div>
  )
}
