import React from "react";

const Select = (props) => {
  let select = props.data.select;
  let selectArray = [];
  for (const key in select) {
    selectArray = select[key];
  }
  // let result = selectArray.map((element) => {
  //   return <option value={element}>{element}</option>;
  // });
  return (
    <div>
      <label
        for={props.data.label}
        className="font-semibold flex items-center justify-start gap-2"
      >
        <span className="text-2xl flex items-center justify-center">
          <ion-icon name={`${props.data.icon}outline`}></ion-icon>
        </span>
        {props.data.label}
        <span className="text-orange-600 text-lg font-bold"> *</span>
      </label>
      <select
        required
        className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
      >
        <option value={props.data.default}>{props.data.default}</option>
        {selectArray.map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
