import { getFollowing } from "../../repositories/follows/getFollowing";

export const getFollowingAction = async (followingId: number) => {
  try {
    const getFollowingAction = await getFollowing(followingId);
    return {
      status: 200,
      message: "get following tweet success",
      data: getFollowingAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
