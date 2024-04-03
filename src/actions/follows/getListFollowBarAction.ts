import { getListFollowBar } from "../../repositories/follows/getListFollowBar";

export const getListFollowBarAction = async () => {
  try {
    const getListFollowBarAction = await getListFollowBar();
    return {
      status: 200,
      message: "get 3 list follow success",
      data: getListFollowBarAction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
