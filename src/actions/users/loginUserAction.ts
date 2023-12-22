import { findUserByEmail } from "../../repositories/users/findUserByEmail";
import { findUserByUsername } from "../../repositories/users/findUserByusername";

export const LoginUserAction = async (usernameOrEmail: string, password: string) => {
    try {

        let user;

        if(usernameOrEmail.includes("@")) {
            user = await findUserByEmail(usernameOrEmail)
        } else {
            user = await findUserByUsername(usernameOrEmail)
        }

        if(!user) {
            return{
                status: 404,
                message: "Account not found"
            }
        }
        if(user.isDeleted) {
            return {
                status: 400,
                message: "Acoount deleted"
            }
        }

        if(user.password !== password) {
            return {
                status: 400,
                message: "Invalid credentials"
            }
        }

        return {
            status: 200,
            message: "login success",
            data: user
        }

    } catch (error) {
        console.log(error)
        throw error
    }
}