import { prisma } from "../../utils/prisma";
export const deleteTweetLike = async (userId: number) => {
  try {
    const deleteTweetLike = await prisma.like.deleteMany({
      where: {
        userId,
      },
    });

    return deleteTweetLike;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
