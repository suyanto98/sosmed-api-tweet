import { deleteFollowing } from "../../repositories/follows/deleteFollowing";

export const deleteFollowingAction = async (followingId: number) => {
  try {
    const deleteFollowingAction = await deleteFollowing(followingId);
    return {
      status: 200,
      message: "delete following tweet success",
      data: deleteFollowingAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
