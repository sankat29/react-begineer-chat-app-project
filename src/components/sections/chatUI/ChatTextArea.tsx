import React from "react";

export default function ChatTextArea(props) {
    
  return (
    <div className="w-full">
      <div className="py-2 px-4 mx-1 mb-4 bg-white rounded-3xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={5}
          value={props.defaultValue}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
          onInput={props.onChange}
        ></textarea>
      </div>
      <button
        type="button"
        onClick={props.onPostNewComment}
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Post comment
      </button>
    </div>
  );
}
