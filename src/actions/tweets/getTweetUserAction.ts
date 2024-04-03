import { getTweetUser } from "../../repositories/tweets/getTweetUser";

export const getTweetUserAction = async (tweetId: number) => {
  try {
    const getTweetUserAction = await getTweetUser(tweetId);
    return {
      status: 200,
      message: "get tweet user success",
      data: getTweetUserAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
