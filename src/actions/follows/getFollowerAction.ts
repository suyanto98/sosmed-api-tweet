import { getFollower } from "../../repositories/follows/getFollower";

export const getFollowerAction = async (followerId: number) => {
  try {
    const getFollowerAction = await getFollower(followerId);
    return {
      status: 200,
      message: "get follower tweet success",
      data: getFollowerAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
