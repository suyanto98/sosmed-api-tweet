import { prisma } from "../../utils/prisma";

export const getUserTweets = async (userId: number) => {
  try {
    const getUserTweets = await prisma.tweet.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return getUserTweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
