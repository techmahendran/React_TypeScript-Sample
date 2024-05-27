import React from "react";

const postCard = (props: { title: string; body: string }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.body}</p>
      </div>
    </>
  );
};

export default postCard;
