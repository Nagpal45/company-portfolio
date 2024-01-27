import LoginForm from "@/components/loginForm/loginForm";
import { signIn } from "@/lib/auth";
import styles from './login.module.css'

export default async function Login() {
  const handleGithubLogin = async() =>{
    "use server"
    await signIn("github");
  }

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <form action={handleGithubLogin} className={styles.form}>
        <button>Login with github</button>
      </form> 
      <LoginForm/>
    </div>
    </div>
  );
}
