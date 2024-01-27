"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signOut } from "./auth";
import bcrypt from "bcrypt"

export const addPost = async (formData) =>{
    // "use server"
    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log("saved");
        revalidatePath("/blog")
    }catch(err){
        console.log(err);
    }
}
export const deletePost = async (formData) =>{
    // "use server"
    const {id} = Object.fromEntries(formData)

    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted");
        revalidatePath("/blog")
    }catch(err){
        console.log(err);
    }
}

export const handleLogout = async() =>{
    await signOut();
}

export const register = async(formData) =>{
    const {username, email, password, passwordRepeat, img} = Object.fromEntries(formData);

    if(password != passwordRepeat){
        return "Password doesn't match";
    }

    try{
        connectToDb();
        const user = await User.findOne({username});
        if(user){
            return "User exists";
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, email, password: hashedPassword, img
        })
        await newUser.save();
        console.log("saved");
    }catch(err){
        console.log(err);
    }
}