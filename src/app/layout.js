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
  {/* Basic Meta Tags */}
  <title>Pelagic Birds - Explore the World of Seabirds</title>
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
  <meta property="og:url" content="https://pelagic-birds.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pelagic Birds - Explore the World of Seabirds" />
  <meta
    property="og:description"
    content="Learn about pelagic bird species, their unique adaptations, and conservation efforts to protect oceanic birdlife."
  />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="pelagic-birds.vercel.app" />
  <meta property="twitter:url" content="https://pelagic-birds.vercel.app/" />
  <meta name="twitter:title" content="Pelagic Birds - Explore the World of Seabirds" />
  <meta
    name="twitter:description"
    content="Learn about pelagic bird species, their unique adaptations, and conservation efforts to protect oceanic birdlife."
  />
</>    
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
