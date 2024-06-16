import React from "react";
import one from "../Components/img/img1.png";
import two from "../Components/img/img2.png";
import three from "../Components/img/img3.png";
import four from "../Components/img/img4.png";
import five from "../Components/img/img5.png";
import six from "../Components/img/img6.png";
import TeamComponent from "../Components/TeamComponent";
import Footer from "../Components/Footer";

const OurTeam = () => {
  return (
    <section className="mt-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-3 sm:px-5 md:px-10 lg:px-16 xl:px-32 gap-10">
        <TeamComponent img={six} name="Caitlyn Hunt" job="Saleswoman" />
        <TeamComponent img={one} name="Michael Diaz" job="Business Owner" />
        <TeamComponent
          img={four}
          name="Briana Rose"
          job="Social Media Manager"
        />
        <TeamComponent img={five} name="Luke Jacobs" job="Mechanic" />
        <TeamComponent img={two} name="Martin Cruz" job="Mechanic" />
        <TeamComponent img={three} name="Lauren Miller" job="Manager" />
      </div>
      <Footer />
    </section>
  );
};

export default OurTeam;
