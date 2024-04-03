import { getComment } from "../../repositories/comments/getComment";
export const getCommentAction = async (tweetId: number) => {
  try {
    const getCommentAction = await getComment(tweetId);
    return {
      status: 200,
      message: "get comment tweets success",
      data: getCommentAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
