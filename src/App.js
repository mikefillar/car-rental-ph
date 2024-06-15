import Header from "./Components/Header";
import Main from "./Components/Main";
import Book from "./Components/Book";
import AboutBook from "./Components/AboutBook";
import Models from "./Components/Models";
import Promo from "./Components/Promo";
import ChooseUs from "./Components/ChooseUs";
import Reviews from "./Components/Reviews";
import Faq from "./Components/Faq";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-body bg-color-body">
      <Header />
      <Main />
      <Book />
      <AboutBook />
      <Models />
      <Promo />
      <ChooseUs />
      <Reviews />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
