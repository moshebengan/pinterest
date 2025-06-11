import { useState } from "react";
import Image from "../../components/image/image";
import "./authPage.css";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form>
            <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" required name="username" />
          </div>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" required name="name" />
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
          <form>
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
