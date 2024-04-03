import { postLikeTweet } from "../../repositories/likes/postLikeTweet";
import { IlikeTweet } from "../../types/tweet.type";

export const postLikeTweetAction = async (data: IlikeTweet) => {
  try {
    const postLikeTweetUser = await postLikeTweet(data);
    return {
      status: 200,
      message: "create like tweet success",
      data: postLikeTweetUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
