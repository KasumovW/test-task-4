const initialState = {
  users: [],
  loadingUsers: false,
};

export const users = (state = initialState, actions) => {
  switch (actions.type) {
    case "load/users/start":
      return {
        ...state,
        loadingUsers: true,
      };

    case "load/users/success":
      return {
        ...state,
        users: actions.payload,
        loadingUsers: false,
      };

    case "delete/load/success":
      return {
        ...state,
        users: state.users.filter((item) => item.id !== actions.payload),
      };

    case "add/load/success":
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: actions.payload.name,
            title: actions.payload.title,
            id: actions.payload.random,
          },
        ],
      };

    case "load/create/success":
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === actions.payload.id) {
            return {
              ...item,
              name: actions.payload.name,
              title: actions.payload.title,
              id: actions.payload.id,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
