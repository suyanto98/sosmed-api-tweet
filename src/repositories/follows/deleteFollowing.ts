import { prisma } from "../../utils/prisma";

export const deleteFollowing = async (followingId: number) => {
  try {
    const deleteFollowing = await prisma.follower.deleteMany({
      where: {
        followingId,
      },
    });
    return deleteFollowing;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
