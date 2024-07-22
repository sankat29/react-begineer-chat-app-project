import {  useState } from "react";

import Chats from "./Chats";
import ChatTextArea from "./ChatTextArea";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatActivityArea from "./ChatActivityArea";

import { useSelector, useDispatch } from 'react-redux';
import { addANewComment } from '../../../redux/commentsSlice'


export default function ChatRoom() {
  // const dbComments = JSON.parse(localStorage.getItem('COMMENTS_DB')) ?? [];

  const dispatch = useDispatch()
 
  const connects = useSelector((state) => state.connects_redux_slice)
  const comments = useSelector((state) => state.comments_redux_slice)
  // const [comments, setComments] = useState(dbComments?.length ? dbComments : dummyComments);
  const [newComment, setNewComment] = useState('');

  function onHandleUserComment(event) {
    setNewComment(event.target.value);
  }

  function onAddNewComment() {
    if (!newComment) {
      alert("Please provide a valid comment.");
      return;
    }

    const comment = {
      chat_owner: "Anonymous User",
      chat_time: new Date().toISOString(),
      chat_message: newComment,
      chat_profile:
        "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      chat_author: "green",
    };

    dispatch(addANewComment(comment))
    // setComments((prevComments) => {
    //   const allComments = [...prevComments, comment];
    //   localStorage.setItem('COMMENTS_DB', JSON.stringify(allComments));
    //   return allComments;
    // });

    setNewComment('');
  }

  return (
    <div className="flex flex-col justify-start gap-12 items-center w-full p-5  bg-gradient-to-l bg-white">
      <ChatRoomHeader />
      <div className="grid grid-cols-2 grid-rows-1 w-full px-10 gap-10 mt-0 pt-0">
        <div className="col-end-2 bg-blue-100 p-5 rounded-3xl shadow-xl">
          <div className="w-full">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Comments
            </h3>

            <Chats comments={comments} />
            <ChatTextArea
              defaultValue={newComment}
              onPostNewComment={onAddNewComment}
              onChange={onHandleUserComment}
            />
          </div>
        </div>

        <ChatActivityArea connects={connects} />
      </div>
    </div>
  );
}
