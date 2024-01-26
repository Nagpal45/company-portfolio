import styles from "./postUser.module.css";

async function getData(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,    );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function PostUser({ userId }) {
    const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}
