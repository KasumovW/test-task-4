import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/actions";

function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const handleClickAuth = () => {
    dispatch(loginStart(login, pass));
  };

  const error = useSelector(state => state.auth.errorMessage);

  return (
    <div>
      <div className="white-block-auth">
        <div className="block-auth-left">
          <div className="block-img"> </div>
        </div>
        <div className="block-auth-right">
          <div className="title-auth">Authorization</div>
          <div className="auth-input">
            <div className="block-input-one">
              <div className="email">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                placeholder="Введите логин"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="input-one"
              />
            </div>
            <div className="block-input-two">
              <div className="lock">
                <i className="fas fa-lock"></i>
              </div>
              <input
                placeholder="Введите пороль"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="input-two"
              />
            </div>
          </div>
          {error && (
            <div className="error">
              Неверный логин/пороль, повторите попытку!
            </div>
          )}
          <div>
            {}
            <div className="button" onClick={handleClickAuth}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
