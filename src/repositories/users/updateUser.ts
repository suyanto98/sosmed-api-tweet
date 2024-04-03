import { Iuser } from "../../types/user.type";
import { prisma } from "../../utils/prisma";

export const updateUser = async (data: Iuser, userId: number) => {
  try {
    const { avatar, cover, email, username, bio } = data;
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: { avatar, cover, email, username, bio },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
