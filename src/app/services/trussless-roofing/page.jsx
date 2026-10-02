import Navbar from "../../../components/Navbar";
import Footer from "../../../components/global/Footer";

export const metadata = {
  title: "Trussless Roofing in India | Vinfra Projects",
  description:
    "Premium trussless roofing systems in India for industrial sheds, auditoriums, warehouses, and large-span structures with leak-proof engineering and on-site roll forming.",
  alternates: {
    canonical: "https://vinfraprojects.com/services/trussless-roofing",
  },
};

export default function TrusslessRoofingPage() {
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
            Trussless Roofing
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Best Trussless Roofing in India for Large-Span, Leak-Proof, and
            Low-Maintenance Structures
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
              marginBottom: "24px",
            }}
          >
            Vinfra Projects is a trusted trussless roofing company in India,
            delivering high-performance self-supported roofing systems with
            precision on-site roll forming, fully welded or mechanically seamed
            finishes, and strong resistance to monsoon conditions, heavy use,
            and long-term wear.
          </p>
          <div style={{ display: "grid", gap: "16px", marginTop: "32px" }}>
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
                Why Vinfra Projects is a Top Choice
              </h2>
              <p style={{ color: "#A4B3B6", lineHeight: 1.7 }}>
                We combine advanced rolling, seam technology, and mobile
                manufacturing units to deliver premium trussless roofing that is
                structurally efficient, installation-ready at site, and built
                for long-term performance.
              </p>
            </div>
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
                Ideal for Commercial and Industrial Roofing
              </h2>
              <p style={{ color: "#A4B3B6", lineHeight: 1.7 }}>
                Warehouses, industrial sheds, auditoriums, sports arenas,
                exhibition halls, and large commercial buildings across Kerala,
                Tamil Nadu, Karnataka, Maharashtra, and other major Indian
                regions where dependable roofing is essential.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
