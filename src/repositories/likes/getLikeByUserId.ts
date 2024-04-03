import { prisma } from "../../utils/prisma";

export const getLikeByUserId = async (userId: number) => {
  try {
    const getLikeByUserId = await prisma.like.findMany({
      where: {
        userId,
      },
    });
    return getLikeByUserId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
