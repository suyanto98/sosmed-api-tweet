import { prisma } from "../../utils/prisma";

export const getComment = async (tweetId: number) => {
  try {
    const getComment = await prisma.comment.findMany({
      where: {
        tweetId: tweetId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return getComment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
