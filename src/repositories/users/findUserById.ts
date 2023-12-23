import { prisma } from "../../utils/prisma"

export const findUserById = async (id: number) => {
    try {
        const users = await prisma.user.findUnique({
            where: {id}
        })
        return users
    } catch (error) {
        console.log(error)
        throw error
    }
}