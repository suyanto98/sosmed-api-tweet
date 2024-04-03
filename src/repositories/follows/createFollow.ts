import { prisma } from "../../utils/prisma";

export const createFollow = async (followerId: number, followingId: number) => {
  try {
    const createComment = await prisma.follower.create({
      data: {
        followerId,
        followingId,
      },
    });
    return createComment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
