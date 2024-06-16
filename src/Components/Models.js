import React from "react";
import ModelButtons from "./ModelButtons";

const Models = () => {
  return (
    <section className="px-5 md:px-10 py-5 mt-14" id="model">
      <div className="flex items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 xl: 1/3 text-center flex items-center justify-center flex-col gap-4">
          <h2 className="font-semibold text-xl">Vehicle Models</h2>
          <h1 className="font-bold text-3xl lg:text-4xl leading-loose">
            Our rental fleet
          </h1>
          <p className="text-gray-600">
            Choose from a variety of amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
      </div>
      <div className="mt-14">
        <ModelButtons />
      </div>
    </section>
  );
};

export default Models;
