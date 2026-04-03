import { comparePassword, hashPassword } from "../utils/hash"
import { prismaClient } from "@repo/db/client"
import { signToken } from "../utils/jwt";

export const signupService = async(email: string, password: string)=>{
    const existingUser = await prismaClient.user.findUnique({
        where: {email}
    })

    if(existingUser){
        throw new Error('user already exists')
    }

    const hashedPassword = await hashPassword(password);

    const user = prismaClient.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });

    const token = signToken(user.id);

    return {token};
}

export const signinService = async (email: string, password: string) =>{
    const user = await prismaClient.user.findUnique({
        where: {email}
    })

    if(!user){
        throw new Error('user not found')
    }

    const isMatch = comparePassword(password, user.password);

    if(!isMatch){
        throw new Error('invalid credentials');
    }

    const token = signToken(user.id);

    return { token };
}