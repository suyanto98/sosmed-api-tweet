import { prisma } from "../../utils/prisma";

export const getListFollowBar = async () => {
  try {
    const getFollowing = await prisma.tweet.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
          },
        },
      },
      distinct: ["userId"],
      orderBy: {
        id: "desc",
      },
      take: 3,
    });
    return getFollowing;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
