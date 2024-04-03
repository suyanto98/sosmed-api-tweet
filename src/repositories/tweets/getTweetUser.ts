import { prisma } from "../../utils/prisma";

export const getTweetUser = async (tweetId: number) => {
  try {
    const getTweetUser = await prisma.tweet.findMany({
      where: {
        id: tweetId,
      },
      include: {
        user: true,
      },
    });
    return getTweetUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
