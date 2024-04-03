import { getTweetLikes } from "../../repositories/likes/getTweetLikes";

export const getTweetLikesAction = async (tweetId: number) => {
  try {
    const getTweetLikesUser = await getTweetLikes(tweetId);
    return {
      status: 200,
      message: "get like tweets success",
      data: getTweetLikesUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
