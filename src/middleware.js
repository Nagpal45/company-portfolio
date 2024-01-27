import { authConfig } from "./lib/auth.config"
import NextAuth from "next-auth"

export default NextAuth(authConfig).auth

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
//matcher allows you to filter middleware to run or not run on specific paths. If we dont add any matcher, middleware will be invoked for every route in the project.