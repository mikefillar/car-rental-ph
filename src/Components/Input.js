import React from "react";

const Input = (props) => {
  return (
    <div>
      <label
        for={props.label}
        className="font-semibold flex items-center justify-start gap-2"
      >
        <span className="text-2xl flex items-center justify-center">
          <ion-icon name={`${props.data.icon}outline`}></ion-icon>
        </span>
        {props.data.label}
        <span className="text-orange-600 text-lg font-bold"> *</span>
      </label>
      <input
        className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
        type="date"
        name="pick-up"
        id="pick-up"
        placeholder="mm/dd/yyyy"
      />
    </div>
  );
};

export default Input;
