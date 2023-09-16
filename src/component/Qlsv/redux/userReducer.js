const initialState = {
  users: [],
};

export const SET_USER = "SET_USER";
export const ADD_USER = "ADD_USER";
export const DEL_USER = "DEL_USER";

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      let newUsers = [...payload];
      return {
        ...state,
        users: newUsers,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, payload],
      };
    }
    case DEL_USER: {
      let newUsers = [...state.users];
      console.log("old", newUsers);
      newUsers.filter((item) => item.id !== payload);
      console.log(newUsers);
      return {
        ...state,
        users: newUsers,
      };
    }
    default:
      return state;
  }
};
