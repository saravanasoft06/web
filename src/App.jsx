import Carousel from "./components/Carousel";
import Products from "./components/Products";
import WhoWeAre from "./components/WhoWeAre";
import Navbar from "./components/NavBar";
import product1 from "../src/assets/tally-prime-logo.svg";
import product2 from "../src/assets/tally-black.png";
import product3 from "../src/assets/software-services.png";
import Footer from "./components/Footer";
import Services from "./components/Services";
import service1 from "../src/assets/maintenance.png";
import service2 from "../src/assets/settings.png";
import service3 from "../src/assets/support.png";
import service4 from "../src/assets/analysis.png";
import service5 from "../src/assets/implementation.png";
import Map from "./components/Map";
import Contact from "./components/Contact";

function App() {
  const images1 = [product1, product2, product3];
  const headings1 = [
    "Tally Prime",
    "Tally Prime Server",
    " Tally Software Services",
  ];
  const contents1 = [
    "Tally Prime is an advanced accounting software platform designed for small and medium-sized businesses to efficiently manage their financial and accounting operations with ease and precision.",
    "Tally Prime Server is a centralized data management solution that enhances Tally Prime's capabilities by providing multi-user access and data security for businesses with multiple users or locations.",
    "Tally software services encompass a range of support and solutions tailored to help businesses streamline their financial management and accounting processes using Tally software.",
  ];

  const images2 = [service1, service2, service3, service4, service5];
  const headings2 = [
    "AMC",
    "Customization",
    " Tally Support",
    "Training",
    "Implementation",
  ];
  const contents2 = [
    "Saravana Soft offers Annual Maintenance Contracts (AMC) for both single-user and multi-user licenses, catering to both our existing and new customers.",
    "Our expertise lies in creating tailored modules for Tally Prime and Tally ERP, elevating productivity and delivering added value to your business.",
    "Our team of certified professionals offers Tally product support to our valued customers through phone, email, and WhatsApp channels.",
    "Saravana soft provides both fundamental and advanced training modules for Tally products, catering to all types of companies and their staff.",
    "Saravana Soft extends its Payroll Management services to its esteemed clients worldwide, encompassing Payroll Advances and GST.",
  ];

  return (
    <section className="bg-white">
      <Navbar />
      <Carousel />
      <WhoWeAre />
      <Products images={images1} headings={headings1} contents={contents1} />
      <Services images={images2} headings={headings2} contents={contents2}/>
      <Map />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
