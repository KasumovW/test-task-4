import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteU } from "../redux/actions";
import ModalCreate from "./modal-creating/ModalCreate";
import PropTypes from "prop-types";

function UserCard({ user }) {
  const [modalCreateActive, setModalCreateActive] = useState(false);

  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(deleteU(user.id));
  };

  return (
    <div className="d-flex">
      <div className="block-contacts">
        <div className="block-head-img-user">
          <div className="block-img-user"></div>
          <div className="create" onClick={() => setModalCreateActive(true)}>
            Create user
          </div>
        </div>
        <div className="head-block-data">
          <div>
            {" "}
            <span>Имя:</span>
            {user.name}
          </div>
          <div>
            {" "}
            <span>id:</span>
            {user.id}
          </div>
          <div>
            <span>Текст:</span>
            {user.title}
          </div>
        </div>
        <div className="exit" onClick={deleteUser}>
          ✖
        </div>
      </div>
      <ModalCreate
        active={modalCreateActive}
        setActive={setModalCreateActive}
        user={user}
      />
    </div>
  );
}
UserCard.prototype = {
  user: PropTypes.object,
};

export default UserCard;
