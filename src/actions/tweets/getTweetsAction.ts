import { getTweets } from "../../repositories/tweets/getTweets";

export const getTweetsAction = async () => {
  try {
    const getTweetsUser = await getTweets();
    return {
      status: 200,
      message: "get tweets success",
      data: getTweetsUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
