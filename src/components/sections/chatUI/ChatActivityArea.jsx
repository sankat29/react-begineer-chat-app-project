import ChatActivity from "./ChatActivity";

export default function ChatActivityArea(props) {
  return (
    <div className="col-start-2 bg-blue-100 p-5 rounded-3xl shadow-xl">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">
        Manage Your Connects
      </h3>
      <div className="p-5 overflow-hidden">
        <ChatActivity connects={props.connects} />
      </div>
    </div>
  );
}
