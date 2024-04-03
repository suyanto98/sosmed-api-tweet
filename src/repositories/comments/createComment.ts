import { Icomment } from "../../types/tweet.type";
import { prisma } from "../../utils/prisma";

export const createComment = async (data: Icomment) => {
  try {
    const { userId, tweetId, comment } = data;
    const createComment = await prisma.comment.create({
      data: { userId, tweetId, comment },
    });
    return createComment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
