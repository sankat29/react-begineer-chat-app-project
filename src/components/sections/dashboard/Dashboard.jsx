import PageWrapper from "../../PageWrapper";

import CreateAnAccount from "./CreateAnAccount";
import ContinueSignin from "./ContinueSignin";
import ChatAnonymous from "./ChatAnonymous";

import BrandsIncluded from "../../BrandsIncluded";
import TeamSection from "../../TeamSection";
import BlogsSection from "../../BlogsSection";
import ApplicationCover from "../../ApplicationCover";

function Dashboard() {
  return (
    <>
      <PageWrapper
        heading={
          <h1 className="text-7xl my-10 font-semibold text-shadow-2xl">
            Choose Your Strategy
          </h1>
        }
      >
        <CreateAnAccount />
        <ContinueSignin />
        <ChatAnonymous />
      </PageWrapper>
      <TeamSection />
      <div className="flex flex-col justify-center items-center h-64">
        <h1 className="text-7xl font-semibold">Strategies Explained</h1>
      </div>
      <ApplicationCover />
      <div className="flex flex-row justify-evenly items-center p-14 mt-10 pb-8 gap-20">
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <CreateAnAccount hideButton />

          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ratione quasi aliquam laudantium esse, tempora beatae veritatis
            ullam eligendi, error aliquid doloremque, atque sit debitis cum.
            Illo ipsa blanditiis velit.
          </div>
        </div>
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <ContinueSignin hideButton />

          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ratione quasi aliquam laudantium esse, tempora beatae veritatis
            ullam eligendi, error aliquid doloremque, atque sit debitis cum.
            Illo ipsa blanditiis velit.
          </div>
        </div>
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <ChatAnonymous hideButton />

          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ratione quasi aliquam laudantium esse, tempora beatae veritatis
            ullam eligendi, error aliquid doloremque, atque sit debitis cum.
            Illo ipsa blanditiis velit.
          </div>
        </div>
      </div>
      <BlogsSection />
      <BrandsIncluded />
     
    </>
  );
}

export default Dashboard;
