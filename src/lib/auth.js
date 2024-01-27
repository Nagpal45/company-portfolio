import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
        try{
          await connectToDb();
          const user = await User.findOne({username: credentials.username})

          if(!user){
            throw new Error("User not found")
          }

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if(!isPasswordCorrect){
            throw new Error("Incorrect password"); 
          }
          return user;
        }catch(err){
          console.log(err);
        }
      }
    })
  ],
  callbacks:{
    async signIn({user,account,profile}){
      console.log(user,account,profile);
      if(account.provider === "github"){
        connectToDb();
        try{
          const user = await User.findOne({email: profile.email});
          if(!user){
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            })
            await newUser.save();
          }
        }catch(err){
          console.log(err);
          return false;
        }
      } 
      return true;
    }
  }
});
