import { Client,ID,Databases,Storage,Query } from "appwrite";
import conf from "../config/conf"

class Service{
    client = new Client()
    database
    bucket
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
                   .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    //Create: 	Creates a new blog post using a unique slug as the ID
    async createPost({title,slug,content,featuredimage,status,userId}){
        try {
            const data = {title,content,featuredimage,status,userId}
            return await this.database.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                data
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    //Update: Updates a blog post by its slug
    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            const data = {title,content,featuredimage,status}
            return await this.database.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                data
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    //Delete: Deletes a post by slug and returns true/false
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }


    //Read: Fetches a single post by slug
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    // query parameter as an  array: Fetches multiple posts based on queries (default: active)
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    //Operations on files:
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error.message)
            return false
        }
    }
    

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    // Gets a preview image URL of a file (to use in <img>)
    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                 conf.appwriteBucketId,
                 fileId
            )
        } catch (error) {
            console.log(error.message)
        }
    }
}

const service = new Service();

export default service