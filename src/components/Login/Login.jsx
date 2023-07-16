import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import classes from "./Login.module.css";
import { useRef } from "react";
import RegisterForm from "./AccessControl/RegisterForm";
import LoginForm from "./AccessControl/LoginForm";

function Login() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  // use ref to get loginRegisterWrapper
  const loginRegisterWrapper = useRef(null);

  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF", //Animate bottom border of login button
    color: registrationFormStatus ? "#000000" : "#1059FF", //Animate color of login button
    backgroundColor: registrationFormStatus ? "#ffffff80" : "#FFFFFF", //Animate color of login button
    fontWeight: registrationFormStatus ? "normal" : "bold", //Animate color of login button
    // loginRegisterWrapper change width important
    width: registrationFormStatus ? "35%" : "50%", //Animate color of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
    color: registrationFormStatus ? "#1059FF" : "#000000", //Animate color of register button
    backgroundColor: registrationFormStatus ? "#FFFFFF" : "#ffffff80", //Animate color of register button
    fontWeight: registrationFormStatus ? "bold" : "normal", //Animate color of register button
    // loginRegisterWrapper change width important4
    width: registrationFormStatus ? "50%" : "35%", //Animate color of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
    loginRegisterWrapper.current.style.height = "1100px";
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
    loginRegisterWrapper.current.style.height = "700px";
  }

  return (
    <div className={classes.MainLogin}>
      {/* <AdminLogin /> */}
      <div className={classes.loginRegisterWrapper} ref={loginRegisterWrapper}>
        <div className={classes.navButtons}>
          <animated.button
            onClick={loginClicked}
            id={classes.loginBtn}
            style={loginBtnProps}
          >
            Login
          </animated.button>
          <animated.button
            onClick={registerClicked}
            id={classes.registerBtn}
            style={registerBtnProps}
          >
            Register
          </animated.button>
        </div>
        <div className={classes.formGroup}>
          <animated.form
            action=""
            className={classes.loginform}
            style={loginProps}
          >
            <LoginForm />
          </animated.form>
          <animated.form
            action=""
            className={classes.registerform}
            style={registerProps}
          >
            <RegisterForm />
          </animated.form>
        </div>
      </div>
    </div>
  );
}

export default Login;
