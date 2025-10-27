import Contact from "./component/Contact";
import FeaturedEbooks from "./component/FeaturesEbooks";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
// import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <FeaturedEbooks />
      <Testimonials/>
      <Contact/>
      <Footer/>
    
    </main>
  );
}
