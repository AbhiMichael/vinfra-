import "../styles/global.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Vinfra Projects | Premium Trussless Roofing in India",
  description:
    "Vinfra Projects delivers advanced trussless roofing, industrial sheds, and architectural steel solutions across India with on-site roll forming and leak-proof engineering.",
  metadataBase: new URL("https://vinfraprojects.com"),
  alternates: {
    canonical: "https://vinfraprojects.com",
  },
  openGraph: {
    title: "Vinfra Projects | Premium Trussless Roofing in India",
    description:
      "High-performance trussless roofing systems for warehouses, auditoriums, factories, and large-span industrial structures.",
    type: "website",
    url: "https://vinfraprojects.com",
  },
};

import WhatsAppChat from "../components/WhatsAppChat";
import { LeadModalProvider } from "../context/LeadModalContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
      </head>
      <body>
        <LeadModalProvider>
          {children}
        </LeadModalProvider>
        <WhatsAppChat />
      </body>
    </html>
  );
}
