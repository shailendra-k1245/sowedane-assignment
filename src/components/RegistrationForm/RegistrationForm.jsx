import { useState } from "react";
import "./style.css";
import { database } from "../../firebase";
import { ref, push, child, update } from "firebase/database";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    // console.log(firstName,lastName,email,password,confirmPassword);
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    

    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);

  };

  return (
    <>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="last_name">
            <label className="form__label" htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="password">
            <label className="form__label" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </>
  );
};
