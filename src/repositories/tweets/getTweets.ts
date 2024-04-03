import { prisma } from "../../utils/prisma";

export const getTweets = async () => {
  try {
    const getTweets = await prisma.tweet.findMany({
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return getTweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
