import { prisma } from "../services/prisma.js";

export const createUser = async (data)=>{
    const user = await prisma.pessoa.create({
        data
    })

    return user
}