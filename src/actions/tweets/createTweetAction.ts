import { createTweet } from "../../repositories/tweets/createTweet";
import { Itweet } from "../../types/tweet.type";

export const createTweetAction = async (data: Itweet) => {
  try {
    const createTweetUser = await createTweet(data);
    return {
      status: 200,
      message: "create tweet success",
      data: createTweetUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
