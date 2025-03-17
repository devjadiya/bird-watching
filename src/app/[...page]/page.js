"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const path = usePathname();
  const page = path.split("/").pop();

  // Map paths to page titles
  const pageTitles = {
    about: "About Us - Pelagic Bird",
    contact: "Contact Us - Pelagic Bird",
    faq: "FAQ - Pelagic Bird",
    policy: "Privacy Policy - Pelagic Bird",
  };

  useEffect(() => {
    if (pageTitles[page]) {
      document.title = pageTitles[page];
    } else {
      document.title = "Pelagic Bird Watching Trips";
    }
  }, [page]);

  return (
    <div>
   
    </div>
  );
}
