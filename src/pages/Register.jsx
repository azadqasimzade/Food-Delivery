import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";

function Register() {
  const loginNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswdRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title={"Sign up"}>
      <CommonSection title={"Sign Up"} />
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="lg:w-1/3 md:w-1/2 w-full m-auto">
              <form
                onSubmit={submitHandler}
                className="grid gap-y-4 bg-footerBg p-5 rounded mb-10"
              >
                <div>
                  <input
                    ref={loginNameRef}
                    type="text"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                    required
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <input
                    ref={signupEmailRef}
                    type="email"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                    required
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    ref={signupPasswdRef}
                    type="password"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white hover:bg-hColor transition duration-300 rounded-md md:text-[0.9rem] text-[0.8rem]"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link to={"/login"} className="md:text-base text-[0.8rem]">
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Register;
