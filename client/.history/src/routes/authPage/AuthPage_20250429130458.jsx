import Image from "../../components/image/image";
import './authPage.css'

const AuthPage = () => {
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" />
        <h1>Login to your account</h1>
        <form>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" required name="email" />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" required name="password" />
          </div>

          <button type="submit">Login</button>
          <p>Don&apos;t have an account?</p>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
