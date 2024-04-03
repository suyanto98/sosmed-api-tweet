import { prisma } from "../../utils/prisma";

export const deleteTweet = async (tweetId: number) => {
  try {
    const deleteTweet = await prisma.tweet.delete({
      where: {
        id: tweetId,
      },
    });

    return deleteTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
