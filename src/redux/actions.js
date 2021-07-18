export const loginStart = () => (dispatch) => {
  dispatch({ type: "auth/started" });

  fetch("/admin")
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

export const loadUsers = () => (dispatch) => {
  dispatch({ type: "load/users/start" });

  fetch("/users")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "load/users/success", payload: json });
    });
};

export const deleteU = (id) => (dispatch) => {
  dispatch({ type: "delete/load/start" });

  fetch(`/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "delete/load/success", payload: id });
    });
};

export const addUser = (name, title) => (dispatch) => {
  const random = Math.random();
  dispatch({ type: "add/load/start" });

  fetch("/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      title: title,
      id: random,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "add/load/success", payload: { name, title, random } });
    });
};

export const createU = (id, name, title, nameC, titleC) => (dispatch) => {
  dispatch({ type: "load/create/start", payload: id });

  fetch(`/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name: nameC, title: titleC, id: id }),
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "load/create/success",
        payload: { name: nameC, title: titleC, id: id },
      });
    });
};
