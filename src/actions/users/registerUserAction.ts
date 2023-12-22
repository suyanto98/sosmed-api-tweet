import { createUser } from "../../repositories/users/createUsers"
import { findUserByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsernam"
import { Iuser } from "../../types/user.type"

export const registerUserAction = async (data: Iuser) => {
    try {
        const {email, username} = data
        const users = await findUserByEmailAndUsername(email, username)

        if(users.length) {
            return {
                status: 400,
                message: "email or username already exist"
            }
        } 

        await createUser(data)

        return {
            status: 200,
            message: "Register new user success"
        }

    } catch (error) {
        console.log(error)
        throw error
    }
}