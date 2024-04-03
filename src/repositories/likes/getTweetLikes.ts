import { prisma } from "../../utils/prisma";

export const getTweetLikes = async (tweetId: number) => {
  try {
    const getTweetLikes = await prisma.like.findMany({
      where: {
        tweetId: tweetId,
      },
    });
    return getTweetLikes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
