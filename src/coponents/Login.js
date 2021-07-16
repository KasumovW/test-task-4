import React from "react";

function Login() {
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
              <div className='email'>
                <i className="fas fa-envelope"></i>
              </div>
              <input placeholder='Введите логин' type="text" className="input-one" />
            </div>
            <div className="block-input-two">
              <div className='lock'>
                <i className="fas fa-lock"></i>
              </div>
              <input placeholder='Введите пороль' type="text" className="input-two" />
            </div>
          </div>
          <div>
            <div className='button'>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
