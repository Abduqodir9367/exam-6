import React from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="big">
            <h1>Login to continue</h1>
            <div className="cart">
              <div className="card-content">
                <form>
                  <input type="email" name="email" placeholder="email" className="form-control" required />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                  />
                  <p>forgot password?</p>
                  <div className="btns">
                    <NavLink to={"/products"}>
                      
                      <button   className="btn1">login</button>
                    </NavLink>
                    <button className="btn">G continue with google</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
