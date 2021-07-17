import React, { useState } from "react";
import "./modalCreate.css";
import { useDispatch } from "react-redux";
import { createU } from "../../redux/actions";
import PropTypes from "prop-types";

function ModalCreate({ active, setActive, user }) {
  const [nameCreating, setNameCreating] = useState("");
  const [titleCrating, setTitleCreating] = useState("");

  const dispatch = useDispatch();
  const userCreating = () => {
    dispatch(
      createU(user.id, user.name, user.title, nameCreating, titleCrating)
    );
    setActive(false);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="block-input-name">
            <input
              type="text"
              value={nameCreating}
              onChange={(event) => setNameCreating(event.target.value)}
              placeholder="Введите имя"
            />
          </div>
          <div className="block-input-title">
            <textarea
              value={titleCrating}
              onChange={(event) => setTitleCreating(event.target.value)}
              placeholder="Введите текст"
            />
          </div>
        </div>
        <div className="add-content" onClick={userCreating}>
          Добавить
        </div>
      </div>
    </div>
  );
}
ModalCreate.prototype = {
  user: PropTypes.object,
  setActive: PropTypes.bool,
  active: PropTypes.bool,
};

export default ModalCreate;
