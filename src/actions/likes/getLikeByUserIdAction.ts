import { getLikeByUserId } from "../../repositories/likes/getLikeByUserId";

export const getLikeByUserIdAction = async (userId: number) => {
  try {
    const getLikeByUserIdAction = await getLikeByUserId(userId);
    return {
      status: 200,
      message: "get like by userId tweets success",
      data: getLikeByUserIdAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
