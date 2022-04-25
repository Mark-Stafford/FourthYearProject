import Forgot from "../../components/Forgot2/Forgot2";
import Register from "../../components/Register2/Register2";
import Login from "../../components/Login2/Login2";
import "./authlayout.css";
import { useState } from "react";

const AuthLayout2 = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setForgot(false);
  };
  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
    setForgot(false);
  };
  const handleForgot = () => {
    setLogin(false);
    setRegister(false);
    setForgot(true);
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="./assets/img/shuttle.svg" alt="logo" />
      </div>
      {/* form */}
      {login && <Login />}
      {register && <Register />}
      {forgot && <Forgot />}
      {/* actions */}
      <div className="authlayout_actions">
        <p
          className="authlayout_actions-l"
          onClick={login ? handleRegister : handleLogin}
        >
          {login ? "Register ?" : "Login ?"}
        </p>
        <p className="authlayout_actions-r" onClick={handleForgot}>
          forgot ?
        </p>
      </div>
    </div>
  );
};

export default AuthLayout2;
