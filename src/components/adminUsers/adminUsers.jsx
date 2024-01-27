import Image from 'next/image';
import styles from './adminUsers.module.css'
import { getUsers } from '@/lib/data';
import { deleteUser } from '@/lib/actions';

export default async function AdminUsers() {
  const users = await getUsers();

    // const deleteuserWithId = (id) => {
    //     return deleteuser.bind(null,id)
    // }
  return (
    <div className={styles.container}>
        <h1>users</h1>
        {users.map((user) => (
            <div className={styles.user} key={user.id}>
                <div className={styles.details}>
                    <Image src={user.img || "/noAvatar.png"} alt="" width={50} height={50}/>
                    <span className={styles.userTitle}>{user.username}</span>
                </div>
                <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id}/>
                    <button className={styles.userButton}>Delete</button>
                </form>
            </div>
        ))}
    </div>
  )
}
