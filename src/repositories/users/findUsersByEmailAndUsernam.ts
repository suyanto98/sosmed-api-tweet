import { prisma } from "../../utils/prisma";

export const findUserByEmailAndUsername = async (
  email: string,
  username: string
) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              equals: email,
            },
          },
          {
            username: {
              equals: username,
            },
          },
        ],
      },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
