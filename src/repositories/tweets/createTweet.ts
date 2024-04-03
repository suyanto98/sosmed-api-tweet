import { Itweet } from "../../types/tweet.type";
import { prisma } from "../../utils/prisma";

export const createTweet = async (data: Itweet) => {
  try {
    const { userId, tweet } = data;
    const createTweet = await prisma.tweet.create({
      data: { userId, tweet },
    });

    return createTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
