import { auth, signIn } from "@/lib/auth";

export default async function Login() {

  const session = await auth();
  console.log(session);

  const handleGithubLogin = async() =>{
    "use server"
    await signIn("github");
  }

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
}
