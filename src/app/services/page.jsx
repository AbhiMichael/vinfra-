import Navbar from "../../components/Navbar";
import ServicesPageContent from "../../views/Services";
import Footer from "../../components/global/Footer";

export const metadata = {
  title: "Roofing Services in India | Vinfra Projects",
  description:
    "Discover Vinfra Projects services for trussless roofing, industrial sheds, and precision steel structures across India.",
  alternates: {
    canonical: "https://vinfraprojects.com/services",
  },
};

export default function ServicesRoute() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
