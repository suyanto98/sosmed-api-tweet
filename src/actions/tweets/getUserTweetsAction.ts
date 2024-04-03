import { getUserTweets } from "../../repositories/tweets/getUserTweets";

export const getUserTweetsAction = async (userId: number) => {
  try {
    const getUserTweet = await getUserTweets(userId);
    return {
      status: 200,
      message: "get user tweets success",
      data: getUserTweet,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
