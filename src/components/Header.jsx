import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex  justify-content-center text-white">
          <h3>
            <Link to="/">Registration</Link>
          </h3>
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        </div>
      </nav>
    </>
  );
};
