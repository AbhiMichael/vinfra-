import Navbar from "../../../components/Navbar";
import Footer from "../../../components/global/Footer";

export const metadata = {
  title: "Top Trussless Roofing in Kerala | Vinfra Projects",
  description:
    "Monsoon-proof trussless roofing solutions in Kerala for auditoriums, warehouses, wedding halls, and industrial buildings with leak-free seaming.",
  alternates: {
    canonical: "https://vinfraprojects.com/regions/kerala",
  },
};

export default function KeralaPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "#0F1418",
          paddingTop: "120px",
          color: "#E9EEF2",
        }}
      >
        <section
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}
        >
          <p
            style={{
              color: "#8a0f0f",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Kerala Hub
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Top Trussless Roofing in Kerala for Heavy Monsoon Protection and
            Long-Term Performance
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects is a trusted name for best roofing in Kerala,
            offering monsoon-resistant trussless roofing systems for coastal
            conditions, leak-proof performance, and low-maintenance durability
            across commercial and industrial applications.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
