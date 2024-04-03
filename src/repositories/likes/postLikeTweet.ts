import { IlikeTweet } from "../../types/tweet.type";
import { prisma } from "../../utils/prisma";

export const postLikeTweet = async (data: IlikeTweet) => {
  try {
    const { userId, tweetId } = data;

    const postLikeTweet = await prisma.like.create({
      data: {
        userId: userId,
        tweetId: tweetId,
      },
    });

    return postLikeTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
