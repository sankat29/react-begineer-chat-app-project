import { Link } from "react-router-dom";
import ChatActivity from "./ChatActivity";

export default function ChatRoom() {
  return (
    <div className="flex flex-col justify-start gap-12 items-center w-full p-5  bg-gradient-to-l bg-white">
      <div className="flex flex-row w-full pt-5 px-10 pb-0 mb-0">
        <h1 className="text-5xl font-bold tracking-tight text-black w-full text-left">
          Chat Room
        </h1>
        <Link
          to="/"
          className="inline-flex items-center w-fit text-nowrap px-4 py-0 text-lg font-medium text-center text-black  border rounded-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-100"
        >
          Back to Dashboard
        </Link>
      </div>
      <div className="px-10 w-full">
        <p className="bg-blue-50 rounded-2xl px-3 w-full py-5">
          <span className="font-semibold">Please Note:</span> Current Profile
          allocated as{" "}
          <span className="font-semibold text-blue-800">Anonymous User</span>.
          To use a well defined profile consider registering yourself as a new
          user for our react-chat app
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 w-full px-10 gap-10 mt-0 pt-0">
        <div className="col-end-2 bg-blue-100 p-5 rounded-3xl shadow-xl">
          <div className="w-fit">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Comments
            </h3>

            <div className="space-y-4 p-10 bg-white m-2 rounded-3xl mb-6">
              <div className="flex">
                <div className="flex-1 bg-blue-500 border rounded-3xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong className="text-white">Sender 1</strong>{" "}
                  <span className="text-xs text-gray-100">3:34 PM</span>
                  <p className="text-sm text-slate-200">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-5">
                  <img
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <img
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-green-600 border rounded-3xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong className="text-white">Anonymous User</strong>{" "}
                  <span className="text-xs text-gray-100">3:34 PM</span>
                  <p className="text-sm text-slate-200">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-1 bg-blue-500 border rounded-3xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong className="text-white">Sender 2</strong>{" "}
                  <span className="text-xs text-gray-100">3:34 PM</span>
                  <p className="text-sm text-slate-200">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-5">
                  <img
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <form>
              <div className="py-2 px-4 mx-1 mb-4 bg-white rounded-3xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="5"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </form>
          </div>
        </div>

        <div className="col-start-2 bg-blue-100 p-5 rounded-3xl shadow-xl">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Manage Your Connects
          </h3>
          <div className="p-5 overflow-scroll">
            <ChatActivity />
          </div>
        </div>
      </div>
    </div>
  );
}
