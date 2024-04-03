import { prisma } from "../../utils/prisma";

export const getFollowing = async (followingId: number) => {
  try {
    const getFollowing = await prisma.follower.findMany({
      where: {
        followingId,
      },
    });
    return getFollowing;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
