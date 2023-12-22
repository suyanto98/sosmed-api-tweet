import { prisma } from "../../utils/prisma"

export const findUserByUsername = async (username: string) => {
    try {
        const users = await prisma.user.findUnique({
            where: {username}
        })
        return users
    } catch (error) {
        console.log(error)
        throw error
    }
}