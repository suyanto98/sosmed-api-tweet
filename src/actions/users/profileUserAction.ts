import { findUserById } from "../../repositories/users/findUserById";
import { excludeFields } from "../../utils/excludeFields";

export const profileUserAction = async (userId: number) => {
  try {
    const user = await findUserById(userId);
    const dataWithoutPassword = excludeFields(user, ["password"]);
    return {
      status: 200,
      message: "find user success",
      data: dataWithoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
