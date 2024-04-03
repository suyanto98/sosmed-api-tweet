import { prisma } from "../../utils/prisma";

export const getFollower = async (followerId: number) => {
  try {
    const getFollower = await prisma.follower.findMany({
      where: {
        followerId,
      },
    });
    return getFollower;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
