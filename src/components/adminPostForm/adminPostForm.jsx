"use client"

import { addPost } from '@/lib/actions'
import styles from './adminPostForm.module.css'
import {useFormState} from "react-dom"

export default function AdminPostForm({userId}) {

  const [state, formAction] = useFormState(addPost, undefined)
  return (
    <div >
      <form action={formAction} className={styles.container}>
        <h1>Add new post.</h1>
        <input type="hidden" name="userId" value={userId}/>
        <input type="text" name="title" placeholder='title'/>
        <input type="text" name="slug" placeholder='slug'/>
        <input type="text" name="img" placeholder='img'/>
        <textarea type="text" name="desc" placeholder='description' rows={10} />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  )
}
