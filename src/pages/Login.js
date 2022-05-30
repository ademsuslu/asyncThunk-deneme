import React, { useEffect } from "react";
import fetchUser from "../Components/features/userSlice";
import { add, logout } from "../Components/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Login() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
    if (user === null) {
      dispatch(fetchUser());
    }
    console.log(user);
  };
  return (
    <div className="container mt-5 ">
      <button className="btn btn-warning" onClick={handleClick} type="button">
        Ekle
      </button>
      <form className="form-control ">
        <div className="container  d-flex flex-column justify-content-center">
          <div className="col-5 m-2">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Email
            </label>
            <input
              type="Email"
              className="form-control"
              id="inputPassword2"
              placeholder="Email"
            />
          </div>
          <div className="col-5 m-2">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </label>
            <input
              type="Password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="col-5 m-2">
            <button type="submit" className="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
