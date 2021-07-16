export const loginStart = (login, pass) => (dispatch) => {
  dispatch({ type: "auth/started" });

  fetch("http://localhost:3001/admin")
    .then((response) => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.5) {
        dispatch({ type: "auth/error", payload: json });
      } else {
        dispatch({ type: "auth/success", payload: json });
      }
    });
};
