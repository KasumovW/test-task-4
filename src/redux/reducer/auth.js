const initialState = {
  token: "",
  authorizing: false,
  errorMessage: null,
}

export const auth = (state = initialState, actions) => {
  switch (actions.type) {
    case "auth/started":
      return {
        ...state,
        authorizing: true,
        errorMessage: false,
      };

    case "auth/success":
      return {
        ...state,
        authorizing: false,
        token: actions.payload.token,
        errorMessage: false,
      };

    case "auth/error":
      return {
        ...state,
        authorizing: false,
        errorMessage: true,
      };

    default:
      return state;
  }
}