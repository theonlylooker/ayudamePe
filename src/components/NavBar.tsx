import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between p-5 bg-gradient-to-b from-black to-bluegreen text-palegreen">
      <div>
        <h1>AyudamePe</h1>
      </div>
      <div className="flex gap-3 items-center">
        <button className="bg-paleblue rounded px-4 py-2">My Chats</button>
        <button className="bg-paleblue rounded px-4 py-2">My Lobbys</button>
        <button className="bg-paleblue rounded px-4 py-2">Create Lobby</button>
        <span>iconavatar</span>
      </div>
    </div>
  );
};

export default NavBar;
