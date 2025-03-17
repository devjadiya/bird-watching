import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pelagic Birds - Bird Watching & Conservation",
  description:
    "Explore the fascinating world of pelagic birds. Discover species, habitats, migration patterns, and conservation efforts for seabirds.",
  keywords:
    "pelagic birds, bird watching, seabird conservation, ocean birds, migratory birds, bird species, ornithology, wildlife photography, bird habitats",
  authors: [{ name: "Pelagic Birds Team", url: "https://pelagic-birds.vercel.app/" }],
  openGraph: {
    title: "Pelagic Birds - Explore the World of Seabirds",
    description:
      "Learn about pelagic bird species, their unique adaptations, and conservation efforts to protect oceanic birdlife.",
    url: "https://pelagic-birds.vercel.app/",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Standard Meta Tags */}
        <>
  <meta name="title" content="Pelagic Birds - Bird Watching & Conservation" />
  <meta
    name="description"
    content="Explore the fascinating world of pelagic birds. Discover species, habitats, migration patterns, and conservation efforts for seabirds."
  />
  <meta
    name="keywords"
    content="pelagic birds, bird watching, seabird conservation, ocean birds, migratory birds, bird species, ornithology, wildlife photography, bird habitats"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://pelagic-birds.vercel.app/" />
  {/* Open Graph (Facebook, LinkedIn) */}
  <meta
    property="og:title"
    content="Pelagic Birds - Explore the World of Seabirds"
  />
  <meta
    property="og:description"
    content="Learn about pelagic bird species, their unique adaptations, and conservation efforts to protect oceanic birdlife."
  />
  <meta property="og:url" content="https://pelagic-birds.vercel.app/" />
  <meta property="og:type" content="website" />
</>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CapLock",
              url: "https://caplock.in",
              logo: "https://caplock.in/favicon.ico",
              description:
                "Discover premium 3D printing, IoT, and prototyping solutions at CapLock.",
              sameAs: [
                "https://instagram.com/caplock.store",
                "https://x.com/CaplockConnect",
                "https://www.linkedin.com/in/caplock-store-0928b6356/",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}',{
            page_path: window.location.pathname,});
            `,
          }}
        />
      </head>

      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
