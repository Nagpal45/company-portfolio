"use client"
import styles from './adminUserForm.module.css'
import { addUser } from '@/lib/actions'
import {useFormState} from "react-dom"

export default function AdminUserForm() {

  const [state, formAction] = useFormState(addUser, undefined)
  return (
    <div >
      <form action={formAction} className={styles.container}>
        <h1>Add new user.</h1>
        <input type="text" name="username" placeholder='username'/>
        <input type="email" name="email" placeholder='email'/>
        <input type="password" name="password" placeholder='password'/>
        <select name="isAdmin">
          <option value="false">Is Admin ?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  )
}

