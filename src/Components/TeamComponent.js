import React from "react";

const TeamComponent = (props) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-col shadow-lg shadow-gray-400">
      <img src={props.img} alt={props.img} />
      <h1 className="font-bold text-2xl mt-6">{props.name}</h1>
      <p className="text-gray-600 mb-6">{props.job}</p>
    </div>
  );
};

export default TeamComponent;
