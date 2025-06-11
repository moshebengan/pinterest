import { useState } from "react";
import Image from "../../components/image/image";
import "./authPage.css";
import apiRequest from "../../utils/apiRequests";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`, data);
      console.log(res)
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" w={36} h={36}/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input type="text" placeholder="Name" required name="displayName" id="displayName"/>
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" required name="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>

            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" required name="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>

            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
