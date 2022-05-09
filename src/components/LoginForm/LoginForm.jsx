export const LoginForm = () => {
  return (
    <>
      <div className="form">
        <div className="form-body">
          <div>
            <label className="form__label" htmlFor="firstName">
              Email{" "}
            </label>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div>
          <label className="form__label" htmlFor="firstName">
              Password{" "}
            </label>
            <input type="password" placeholder="Enter Password" />
          </div>
        </div>
        <button style={{marginLeft:"80%"}}>Log in</button>
      </div>
    </>
  );
};
