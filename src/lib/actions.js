"use server"
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signOut } from "./auth";

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