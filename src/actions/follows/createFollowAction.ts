import { createFollow } from "../../repositories/follows/createFollow";
import { Ifollow } from "../../types/follow.type";

export const createFollowAction = async (data: Ifollow) => {
  try {
    const followerId = Number(data.followerId);
    const followingId = Number(data.followingId);
    const createFollowAction = await createFollow(followerId, followingId);
    return {
      status: 200,
      message: "create follow tweet success",
      data: createFollowAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
