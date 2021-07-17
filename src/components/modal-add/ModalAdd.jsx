import React, { useState } from "react";
import "./modalAdd.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import PropTypes from "prop-types";

function ModalAdd({ active, setActive }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser(name, title));
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
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Введите имя"
            />
          </div>
          <div className="block-input-title">
            <textarea
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Введите текст"
            />
          </div>
        </div>
        <div className="add-content" onClick={handleAddUser}>
          Добавить
        </div>
      </div>
    </div>
  );
}
ModalAdd.prototype = {
  active: PropTypes.bool,
  setActive: PropTypes.bool,
};

export default ModalAdd;
