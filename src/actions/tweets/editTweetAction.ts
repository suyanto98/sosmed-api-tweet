import { editTweet } from "../../repositories/tweets/editTweet";
import { Itweet } from "../../types/tweet.type";

export const editTweetAction = async (data: Itweet, tweetId: number) => {
  try {
    const editTweetUser = await editTweet(data, tweetId);
    return {
      status: 200,
      message: "update tweet success",
      data: editTweetUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
