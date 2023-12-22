import { prisma } from "../../utils/prisma"

export const findUserByEmail = async (email: string) => {
    try {
        const users = await prisma.user.findUnique({
            where: {email}
        })
        return users
    } catch (error) {
        console.log(error)
        throw error
    }
}