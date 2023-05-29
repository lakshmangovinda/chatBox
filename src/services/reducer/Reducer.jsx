import { addtoChat, addUsers,addUser } from "../constant";


const intialState = {
    usersList: [],
    selectedUser:{},
    chatData: [],

};
export default function Store(state = intialState, action) {
  
  switch (action.type) {
    case addUsers:
      return { ...state,usersList:action.data };
    case addUser:
        console.log({ ...state,selectedUser:action.data })
      return { ...state,selectedUser:action.data };
    case addtoChat:
    
      let chartData = JSON.parse(JSON.stringify(state)).chatData;
      const userData =
        chartData && chartData.length
          ? chartData.find((res) => res.userId === action.data.userId)
          : null;

      if (userData) {
        /** if user id alredy exits */
        const [message] = action.data.messages
        userData.messages.push(message);
        chartData = chartData.map((res) => {
          if (res.userId === action.data.userId) {
            res.messages = userData.messages;
          }
          return res;
        });
      } else {
       
          chartData.push(action.data);
        
      }
      return Object.assign(JSON.parse(JSON.stringify(state)), {
        chatData: chartData,
      });
    default:
      return state;
  }
}
