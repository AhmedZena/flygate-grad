import React, { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import classes from "../Login.module.css";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let [token, setToken] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://40.115.44.233:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setErrorMessage("");
        // Login successful
        // console.log(response.text());
        // const responseData = await response.text();
        // console.log(responseData);
        token = await response.text();
        console.log(token);
        // save it to local storage
        localStorage.setItem("userToken", token);

        toast.success("Login successful");
        // navigate("/profile"); // Navigate to /profile upon successful login
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input
          onClick={handleLogin}
          type="submit"
          value={isLoading ? "Loading..." : "Submit"}
          className={`${classes.submit} ${isLoading ? "cursor-wait" : ""}`}
          disabled={isLoading}
        />
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <ToastContainer />
      </div>

      <div className="flex items-center justify-between">
        <div
          className="flex items-center m-4 text-blue-900 font-bold py-2 px-4 rounded hover:text-blue-900 hover:text-xl cursor-pointer"
          onClick={() => {
            navigate("/admin-login");
          }}
        >
          <RiAdminLine className="mr-2" />
          admin ?
        </div>
      </div>

      <SocialLogin />
    </>
  );
}

export default LoginForm;
