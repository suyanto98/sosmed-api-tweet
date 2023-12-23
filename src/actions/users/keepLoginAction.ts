import { findUserById } from "../../repositories/users/findUserById"
import { excludeFields } from "../../utils/excludeFields"

export const keeploginAction = async (id: number) => {
    try {
        const user = await findUserById(id)
        if(!user) {
            return{
                status: 404,
                message: `User with id: ${id} not found`
            }
        }

        const dataWithoutPassword = excludeFields(user, ["password"])

        return {
            status: 200,
            message: "success",
            data: dataWithoutPassword
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}