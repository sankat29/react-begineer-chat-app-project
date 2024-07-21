import { useNavigate } from "react-router";

import {useRef} from 'react'
import { Link } from "react-router-dom";

const validUser = "react_chat@rc.com";
const validPassword = "react123";

export default function SignIn() {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  function onNavigateToChatRoom() {
    if (
      username.current.toLowerCase() === validUser &&
      password.current.toLowerCase() === validPassword
    ) {
      navigate("/chat-room");
      return;
    }


    alert('Not a valid registered user!');
  }


  function onHandleUserName(event) {
    username.current = event.target.value;
  }

  function onHandleUserPassword(event) {
    password.current= event.target.value;
  }

  return (
    <>
      <div className="flex bg-gradient-to-r from-blue-900 via-pink-400 to-indigo-700 h-screen w-screen flex-col justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center rounded-3xl shadow-3xl w-fit px-20 py-20">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onInput={onHandleUserName}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-red-600 hover:text-red-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onInput={onHandleUserPassword}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onNavigateToChatRoom}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/sign-up"
                className="font-semibold leading-6 text-red-600 hover:text-red-500"
              >
                Consider Creating An Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
