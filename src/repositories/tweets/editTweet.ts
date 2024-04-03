import { Itweet } from "../../types/tweet.type";
import { prisma } from "../../utils/prisma";

export const editTweet = async (body: Itweet, tweetId: number) => {
  const { userId, tweet } = body;

  try {
    const editTweet = await prisma.tweet.update({
      where: {
        id: tweetId,
      },
      data: {
        userId,
        tweet,
      },
    });

    return editTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
