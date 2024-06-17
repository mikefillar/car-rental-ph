import React, { useRef, useState } from "react";
import audi from "./img/cars/audi.jpg";
import golf from "./img/cars/golf6.jpg";
import camry from "./img/cars/camry.jpg";
import modern from "./img/cars/320.jpg";
import mercedes from "./img/cars/mercedes.jpg";
import passat from "./img/cars/passat.jpg";

const Book = () => {
  const carArray = [audi, golf, camry, modern, mercedes, passat];
  const [id, setId] = useState(1);
  const [book, setBook] = useState({});
  const carRef = useRef(null);
  const pickUpRef = useRef(null);
  const dropOffRef = useRef(null);
  const pickDateRef = useRef(null);
  const dropDateRef = useRef(null);

  //fist booking form
  const handleSubmit = (event) => {
    event.preventDefault();
    // document.body.style.overflow = "hidden";
    setId((id) => id + 1);
    let modal = document.getElementById("modal");
    let display = document.getElementById("error");
    let errorMessage = document.getElementById("errorMessage");
    const selectedOption = carRef.current.options[carRef.current.selectedIndex];
    const carId = selectedOption.id;
    console.log(carId);
    if (
      carRef.current.value === "" ||
      pickUpRef.current.value === "" ||
      dropOffRef.current.value === "" ||
      pickDateRef.current.value === "" ||
      dropDateRef.current.value === ""
    ) {
      display.classList.remove("hidden");
      display.classList.remove("bg-lime-200", "text-lime-800");
      display.classList.add("bg-red-200", "text-red-900");
      errorMessage.innerHTML = "All fields are required!";
    } else {
      let data = {
        id: id,
        car: carRef.current.value,
        carImg: carArray[carId],
        pickUpRef: pickUpRef.current.value,
        dropOffRef: dropOffRef.current.value,
        pickDateRef: pickDateRef.current.value,
        dropDateRef: dropDateRef.current.value,
      };
      display.classList.add("hidden");
      modal.classList.remove("hidden");
      setBook(data);
    }
  };
  console.log(book);
  //Handle submit form
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const phoneRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const addRef = useRef(null);
  const cityRef = useRef(null);
  const zipRef = useRef(null);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let error2 = document.getElementById("error2");
    if (
      fNameRef.current.value === "" ||
      lNameRef.current.value === "" ||
      phoneRef.current.value === "" ||
      ageRef.current.value === "" ||
      emailRef.current.value === "" ||
      addRef.current.value === "" ||
      cityRef.current.value === "" ||
      zipRef.current.value === ""
    ) {
      error2.classList.remove("hidden");
    } else {
      document.getElementById("modal").classList.add("hidden");
      let display = document.getElementById("error");
      let errorMessage = document.getElementById("errorMessage");
      error2.classList.add("hidden");
      display.classList.remove("hidden", "bg-red-200", "text-red-900");
      display.classList.add("bg-lime-200", "text-lime-800");
      errorMessage.innerHTML =
        "Booking submitted! Check your email for the booking confirmation.";
      // document.body.style.overflow = "auto";
    }
  };
  //modal
  //array of locations
  const locations = [
    "Manila",
    "Quezon City",
    "Makati",
    "Taguig",
    "Mandaluyong",
    "Pasig",
    "Cavite",
    "Bulacan",
    "Pampanga",
    "Malolos",
  ];
  //array of cars
  const cars = [
    "Audi A1 S-Line",
    "VW Golf 6",
    "Toyota Camry",
    "BMW 320 Modernline",
    "Mercedes-Benz GLK",
    "VMW Passat CC",
  ];
  return (
    <section className="relative sm:px-5 lg:px-10 py-5 my-14" id="book">
      <div className="rounded px-5 lg:px-20 py-10 bg-white shadow-xl flex flex-col gap-5">
        <h2 className="font-bold text-xl lg:text-2xl">Book a car</h2>
        <div className="hidden font-semibold rounded px-4 py-2" id="error">
          <div className="flex justify-between items-center">
            <p className="" id="errorMessage">
              {" "}
            </p>
            <span className="cursor-pointer text-2xl mt-1">
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div>
              <label
                for="Select your car type"
                className="font-semibold flex items-center justify-start gap-2"
              >
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name="car-sport-outline"></ion-icon>
                </span>
                Select your car type
                <span className="text-orange-600 text-lg font-bold"> *</span>
              </label>
              <select
                ref={carRef}
                className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
              >
                <option value="">Select your car type</option>
                {cars.map((element, index) => {
                  return (
                    <option id={index} key={index} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                for="Pick-up"
                className="font-semibold flex items-center justify-start gap-2"
              >
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                Pick-up
                <span className="text-orange-600 text-lg font-bold"> *</span>
              </label>
              <select
                ref={pickUpRef}
                className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
              >
                <option value="">Select your pick-up location</option>
                {locations.map((element) => {
                  return (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                for="Drop-off"
                className="font-semibold flex items-center justify-start gap-2"
              >
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                Drop-off
                <span className="text-orange-600 text-lg font-bold"> *</span>
              </label>
              <select
                ref={dropOffRef}
                className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
              >
                <option value="">Select your drop-off location</option>
                {locations.map((element) => {
                  return (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                for="Pick-up"
                className="font-semibold flex items-center justify-start gap-2"
              >
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name={`calendar-outline`}></ion-icon>
                </span>
                Pick-up
                <span className="text-orange-600 text-lg font-bold"> *</span>
              </label>
              <input
                ref={pickDateRef}
                className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
                type="date"
                name="pick-up"
                id="pick-up"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div>
              <label
                for="Drop-off"
                className="font-semibold flex items-center justify-start gap-2"
              >
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name={`calendar-outline`}></ion-icon>
                </span>
                Drop-off
                <span className="text-orange-600 text-lg font-bold"> *</span>
              </label>
              <input
                ref={dropDateRef}
                className="w-full rounded border border-gray-400 px-4 py-2 text-gray-600 text-sm"
                type="date"
                name="drop-off"
                id="drop-off"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="flex items-end">
              <button
                className="w-full py-2 rounded bg-orange-600 hover:shadow-lg hover:shadow-orange-500 text-white font-bold text-lg"
                type="submit"
              >
                Book now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <div className="hidden py-5" id="modal">
        <div className="absolute left-0 top-0 flex items-start justify-center w-full h-screen bg-gray-500 bg-opacity-50">
          <div className="w-full h-screen sm:w-5/6 md:w-4/5 lg:w-3/5 bg-white border-2 border-white overflow-y-scroll">
            <h1 className="font-bold text-white bg-orange-600 text-2xl uppercase px-4 py-3 flex items-center justify-between">
              Complete Reservation
              <span
                className="text-2xl mt-1 cursor-pointer "
                onClick={() => {
                  document.getElementById("modal").classList.add("hidden");
                  // document.body.style.overflow = "auto";
                }}
              >
                <ion-icon name="close-outline"></ion-icon>
              </span>
            </h1>
            <div className="px-3 sm:px-5 md:px-8 bg-orange-100 py-5 flex flex-col gap-4 text-center">
              <h2 className="flex flex-col md:flex-row items-center justify-start text-orange-600 font-bold text-xl">
                <span className="text-2xl mt-2">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                Upon completing this reservation inquiry, you will recieve:
              </h2>
              <p className="text-gray-600 text-lg">
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
            {/* display booking */}
            <div className="flex flex-col md:flex-row justify-between w-full px-3 sm:px-5 md:px-8 py-5 border-b gap-5">
              <div className="flex flex-col gap-4 w-full justify-start text-center md:text-left items-center md:justify-start md:items-start">
                <h1 className="text-orange-600 text-xl font-bold">
                  Location and Date
                </h1>
                <div>
                  <p className="flex items-center justify-start gap-2 font-bold">
                    <ion-icon name="calendar-outline"></ion-icon> Pick-up Date &
                    Time
                  </p>
                  <p>
                    {book.pickDateRef}
                    {" / "} <input type="time" name="" value="" />
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-start gap-2 font-bold">
                    <ion-icon name="calendar-outline"></ion-icon> Drop-off Date
                    & Time
                  </p>
                  <p>
                    {book.dropDateRef}
                    {" / "}
                    <input type="time" name="" value="" />
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-start gap-2 font-bold">
                    <ion-icon name="location-outline"></ion-icon> Pick-up
                    location
                  </p>
                  <p>{book.pickUpRef}</p>
                </div>
                <div>
                  <p className="flex items-center justify-start gap-2 font-bold">
                    <ion-icon name="location-outline"></ion-icon> Drop-off
                    location
                  </p>
                  <p>{book.dropOffRef}</p>
                </div>
              </div>

              <div className="text-center flex flex-col justify-center items-center md:text-left md:justify-start md:items-start">
                <h1 className="text-xl font-bold">
                  Car :{" "}
                  <span className="text-orange-600 font-bold">{book.car}</span>
                </h1>
                <img src={book.carImg} alt="car" />
              </div>
            </div>

            <div className="px-8 py-5">
              <h2 className="text-orange-600 font-bold text-xl uppercase">
                Personal Information
              </h2>
              <div className="hidden" id="error2">
                <div className="flex items-center justify-between bg-red-200 px-4 py-1">
                  <p className="text-md text-red-800 font-semibold">
                    All fields are required!
                  </p>
                  <span className="text-xl mt-1 text-red-800 cursor-pointer">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                </div>
              </div>
              <form
                className="flex flex-col md:grid gap-5 mt-4"
                onSubmit={handleSubmitForm}
              >
                <div className="">
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="firstName"
                  >
                    First Name{" "}
                    <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={fNameRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="lastName"
                  >
                    Last Name{" "}
                    <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={lNameRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="phone"
                  >
                    Phone Number{" "}
                    <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={phoneRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="age"
                  >
                    Age <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={ageRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="email"
                  >
                    Email <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="address"
                  >
                    Address <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={addRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="city"
                  >
                    City <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={cityRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-600 text-md font-semibold"
                    for="zip"
                  >
                    Zip <span className="text-orange-600 font-bold">*</span>
                  </label>
                  <input
                    ref={zipRef}
                    className="w-full text-gray-600 px-4 py-2 bg-gray-300"
                    type="number"
                    name="zip"
                    id="zip"
                    placeholder="Enter your zip code"
                  />
                </div>
                <div className=" col-span-2">
                  <input type="checkbox" name="check1" id="check1" />{" "}
                  <span className="text-gray-600">
                    Please send me the latest news and update
                  </span>
                </div>
                <div className="flex col-span-2 bg-orange-100 ">
                  <button
                    className="w-full bg-orange-600 text-white py-2 text-lg"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
