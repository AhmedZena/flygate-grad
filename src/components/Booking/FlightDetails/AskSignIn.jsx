import React from "react";

const AskSignIn = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-blue-500 p-4 rounded-lg shadow-md w-3/4 m-auto animate-move-circular hover:animate-none">
        <p className="text-white text-xl font-bold ">Traveller Details</p>
        <div className="flex items-center">
          <p className="text-white text-sm mr-1">Sign in to book faster</p>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-md shadow-sm">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default AskSignIn;
