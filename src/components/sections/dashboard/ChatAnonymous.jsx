import Card from "../../Card";

import AnonymousImage from "../../../assets/secret.png";
import { Link } from "react-router-dom";

function ChatAnonymous({ hideButton }) {
  return (
    <Card
      height="size-full"
      background={hideButton ? "bg-indigo-800" : "bg-slate-900"}
      border="border-0"
      hideButton={hideButton}
    >
      <div className="flex flex-col justify-center items-center">
        {!hideButton && (
          <h1 className="text-2xl flex justify-center w-full pl-4 mt-4">
            Chat Anonymous
          </h1>
        )}
        {hideButton && (
          <h1 className="text-3xl flex flex-col justify-center itemms-center h-auto w-full">
            Chat Anonymous
          </h1>
        )}
        {!hideButton && (
          <>
            <div
              className="p-2 
    font-mono 
    text-2xl 
    flex 
    flex-col 
    justify-center 
    items-start
    gap-3
    m-3"
            ></div>
            <div className="w-64 p-2 m-3">
              <img id="chat_cover_img" src={AnonymousImage} />
            </div>

            <div className="flex flex-row justify-between items-center gap-2 w-full mt-4">
              {/* <button className="bg-purple-400 w-full p-4 rounded-2xl"> */}
                <Link to="/chat" className="bg-purple-400 w-full p-4 text-center rounded-2xl">
                Get Started
                </Link>
              {/* </button> */}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

export default ChatAnonymous;
