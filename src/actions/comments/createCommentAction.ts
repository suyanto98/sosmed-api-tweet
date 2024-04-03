import { createComment } from "../../repositories/comments/createComment";
import { Icomment } from "../../types/tweet.type";

export const createCommentAction = async (data: Icomment) => {
  try {
    const createCommentUser = await createComment(data);
    return {
      status: 200,
      message: "create comment tweet success",
      data: createCommentUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
