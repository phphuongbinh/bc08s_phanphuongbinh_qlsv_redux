const initialState = {
  users: [],
  selectUser: {
    id: "",
    fullname: "",
    phone: "",
    email: "",
  },
};

export const SET_USER = "SET_USER";
export const ADD_USER = "ADD_USER";
export const DEL_USER = "DEL_USER";
export const EDIT_USER = "EDIT_USER";

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
      let index = newUsers.findIndex((item) => {
        return item.id === payload;
      });
      newUsers.splice(index, 1);
      return {
        ...state,
        users: newUsers,
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        selectUser: { ...payload },
      };
    }
    default:
      return state;
  }
};
