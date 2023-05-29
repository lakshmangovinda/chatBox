import { addtoChat, addUsers, addUser } from "../constant";

export const addUserstoStore = (data) => {
  return {
    type: addUsers,
    data: data,
  };
};
export const addUsertoStore = (data) => {
  return {
    type: addUser,
    data: data,
  };
};
export const addChatData = (data) => {
  return {
    type: addtoChat,
    data: data,
  };
};
