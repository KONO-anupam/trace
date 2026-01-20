import { comparePassword, hashPassword } from "../utils/hash"
import { prisma } from "../db";
import { signToken } from "../utils/jwt";

export const signupService = async(email: string, password: string)=>{
    const existingUser = await prisma.user.findUnique({
        where: {email}
    })

    if(existingUser){
        throw new Error('user already exists')
    }

    const hashedPassword = await hashPassword(password);

    const user = prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });

    const token = signToken(user.id);

    return {token};
}

export const signinService = async (email: string, password: string) =>{
    const user = await prisma.user.findUnique({
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