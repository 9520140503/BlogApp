import { Client, Account, ID } from "appwrite";
import conf from "../config/conf"

class AuthService{
    client =  new Client()
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
                    .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const user = await this.account.create(ID.unique(),email,password,name)
            if(user){
                return this.login({email,password})
            }else{
                return user
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    async login({email,password}){
        try {
             await this.account.deleteSession('current')
        } catch (error) {
            console.log(error.message)
        }

        try {
            return this.account.createEmailPasswordSession(email,password)
        } catch (error) {
           console.log(error.message) 
           throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            if(error.code === 401) return null
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(error.message)
        }
    }
}

const authService = new AuthService()

export default authService
