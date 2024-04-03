import { updateUser } from "../../repositories/users/updateUser";
import { Iuser } from "../../types/user.type";

export const updateUserAction = async (data: Iuser, userId: number) => {
  try {
    const updateUserAction = await updateUser(data, userId);
    return {
      status: 200,
      message: "update user success",
      data: updateUserAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
