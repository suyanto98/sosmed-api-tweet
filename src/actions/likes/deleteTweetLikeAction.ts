import { deleteTweetLike } from "../../repositories/likes/deleteTweetLike";

export const deleteTweetLikeAction = async (userId: number) => {
  try {
    const deleteTweetLikeUser = await deleteTweetLike(userId);
    return {
      status: 200,
      message: "delete like tweets success",
      data: deleteTweetLikeUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
