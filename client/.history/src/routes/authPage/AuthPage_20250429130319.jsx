import Image from "../../components/image/image";

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
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
