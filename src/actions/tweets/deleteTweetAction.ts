import { deleteTweet } from "../../repositories/tweets/deleteTweet";

export const deleteTweetAction = async (tweetId: number) => {
  try {
    const deleteTweetsUser = await deleteTweet(tweetId);
    return {
      status: 200,
      message: "delete tweets success",
      data: deleteTweetsUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
