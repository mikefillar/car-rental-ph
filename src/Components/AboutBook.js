import React from "react";
import drive from "./img/drive-icon.png";
import carIcon from "./img/car-icon.png";
import operator from "./img/operator-icon.png";
import AboutBooksComponent from "./AboutBooksComponent";

const AboutBook = () => {
  return (
    <section className="px-5 md:px-10 py-5 mt-14">
      <div className="flex text-center flex-col justify-center items-center gap-4">
        <h2 className="font-semibold text-xl">Plan your trips now</h2>
        <h1 className="font-bold text-3xl md:text-4xl">
          Quick and easy car rental
        </h1>
      </div>
      <div className="grid sm:cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <AboutBooksComponent
          src={carIcon}
          data={{
            label: "Select",
            caption:
              "We offer a big range of vehicles and We have the perfect car to meet all of your driving needs.",
          }}
        />
        <AboutBooksComponent
          src={operator}
          data={{
            label: "Contact",
            caption:
              "Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
          }}
        />
        <AboutBooksComponent
          src={drive}
          data={{
            label: "Drive",
            caption:
              "Whether you're hitting the open, we've got you covered with our wide range of cars",
          }}
        />
      </div>
    </section>
  );
};

export default AboutBook;
