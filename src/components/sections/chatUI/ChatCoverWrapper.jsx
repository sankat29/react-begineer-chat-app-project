import { Link } from "react-router-dom";

export default function ChatCoverWrapper() {
  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-pink-400 to-indigo-700 w-full h-full">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Lets Start With Creating a Group
              </h1>
              <p className="mt-4 text-xl text-white">
                Group allow users to collaborate together and then can share
                their ideas in text based communication manner.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-4">
                  <input
                    placeholder="Provide a Group Name"
                    type="text"
                    className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block w-96 border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl mr-5"
                  />
                  <input
                    placeholder="Provide your Creator Name"
                    type="text"
                    className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block w-96 border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl mr-5"
                  />
                  <div className="flex flex-row justify-start items-center gap-4 text-white">
                    <input
                      placeholder="Provide Group Limit"
                      type="number"
                      defaultValue={5}
                      className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl"
                    />
                     Defaults to 5
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4 text-white">
                    <input type="checkbox" checked />
                    I Agree To React-Chat Terms and Conditions
                  </div>
                  <Link
                    to="/chat-room"
                    className="inline-block rounded-3xl border border-transparent bg-yellow-400 px-8 py-4 w-96 mt-12 text-center font-medium text-black hover:bg-slate-200"
                  >
                    Create & Take Me To Chat Room
                  </Link>
                  <Link
                    to="/"
                    className="inline-block rounded-md border border-transparent px-8 py-2 w-96 mt-12 text-center font-medium text-white"
                  >
                    Navigate back to Dashboard
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
