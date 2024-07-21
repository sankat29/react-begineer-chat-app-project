import Card from "../../Card";

import CreateAccountImage from "../../../assets/create_account.png";
import { Link } from "react-router-dom";

function CreateAnAccount({ hideButton }) {
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
            Create Account
          </h1>
        )}
        {hideButton && (
          <h1 className="text-3xl flex flex-col justify-center itemms-center h-auto w-full">
            Create Account
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
              <img id="chat_cover_img" src={CreateAccountImage} />
            </div>

            <div className="flex flex-row justify-between items-center gap-2 w-full mt-4">
              <Link
                to="/sign-up"
                className="bg-red-600 w-full p-4 text-center rounded-2xl"
              >
                Get Started
              </Link>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

export default CreateAnAccount;
