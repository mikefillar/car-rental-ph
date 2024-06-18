import React from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <section className="mt-14">
      <div className="grid md:grid-cols-2 px-3 sm:px-5 md:px-10 lg:px-20 gap-10">
        <div className="flex flex-col gap-8 md:mr-10 text-center md:text-left">
          <h2 className="font-semibold text-xl">
            "Unlock Adventure:{" "}
            <span className="text-orange-600">
              Drive Your Dreams with Our Fleet!
            </span>
            "
          </h2>
          <h1 className="font-bold text-4xl">Need additional information?</h1>
          <p className="text-gray-600">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 font-semibold hover:text-orange-600 cursor-pointer">
            <span className="font-semibold text-orange-600 text-xl">
              <ion-icon name="call-outline"></ion-icon>
            </span>{" "}
            (123) 456-789
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 font-semibold hover:text-orange-600 cursor-pointer">
            <span className="font-semibold text-orange-600 text-xl">
              <ion-icon name="mail-outline"></ion-icon>
            </span>{" "}
            carrentalph@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 font-semibold hover:text-orange-600 cursor-pointer">
            <span className="font-semibold text-orange-600 text-xl">
              <ion-icon name="location-outline"></ion-icon>
            </span>{" "}
            Malolos,Bulacan
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg font-semibold" for="name">
            Full Name{" "}
            <span className="text-orange-600 font-semibold text-lg">*</span>
          </label>
          <input
            className="text-gray-600 px-5 py-2 bg-orange-50"
            type="text"
            name="name"
            placeholder='E.g: "John Doe"'
          />
          <label className="text-lg font-semibold" for="email">
            Email{" "}
            <span className="text-orange-600 font-semibold text-lg">*</span>
          </label>
          <input
            className="text-gray-600 px-5 py-2 bg-orange-50"
            type="email"
            name="name"
            placeholder="youremail@example.com"
          />
          <label className="text-lg font-semibold" for="about">
            Tell us about it{" "}
            <span className="text-orange-600 font-semibold text-lg">*</span>
          </label>
          <textarea
            className="text-gray-600 px-5 py-2 w-full bg-orange-50"
            rows="5"
            placeholder="Your message here..."
          ></textarea>
          <button
            type="button"
            className="bg-orange-600 text-white py-4 text-xl font-bold rounded"
          >
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
