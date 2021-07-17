import React, { useEffect, useState } from "react";
import ModalAdd from "./modal-add/ModalAdd";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/actions";
import UserCard from "./UserCard";

function Main() {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);

  return (
    <div className="modal-head">
      <div className="block-title-head">
        <div className="contacts-tile">Контакты</div>
        <div className="add-contact" onClick={() => setModalActive(true)}>
          {" "}
          Добавить контакт
        </div>
      </div>
      <div className="block-main">
        <div className="scroll-bar">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
          <div className="end"></div>
        </div>
      </div>
      <ModalAdd active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default Main;
