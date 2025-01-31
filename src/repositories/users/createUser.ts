import { Iuser } from "../../types/user.type";
import { prisma } from "../../utils/prisma";

export const createUser = async (data: Iuser) => {
  try {
    const { email, username, password } = data;
    const user = await prisma.user.create({
      data: { email, username, password },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
