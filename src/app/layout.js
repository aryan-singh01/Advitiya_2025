// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ADVITIYA 2026 - Annual Techno-Cultural Fest",
//   description:
//     "Join us for the biggest techno-cultural extravaganza at IIT ROPAR. Experience innovation, creativity, and celebration like never before!",
//   keywords:
//     "advitiya, iit ropar, techfest, cultural fest, college fest, 2026",
//   authors: [{ name: "ADVITIYA Team" }],
//   openGraph: {
//     title: "ADVITIYA 2026",
//     description: "Annual Techno-Cultural Fest of IIT ROPAR",
//     url: "https://advitiya25.in",
//     siteName: "ADVITIYA 2026",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://advitiya25.in"), // This fixes the metadata warning
  title: "ADVITIYA 2026 - Annual Techno-Cultural Fest",
  description:
    "Join us for the biggest techno-cultural extravaganza at IIT ROPAR. Experience innovation, creativity, and celebration like never before!",
  keywords: "advitiya, iit ropar, techfest, cultural fest, college fest, 2026",
  authors: [{ name: "ADVITIYA Team" }],
  openGraph: {
    title: "ADVITIYA 2026",
    description: "Annual Techno-Cultural Fest of IIT ROPAR",
    url: "https://advitiya25.in",
    siteName: "ADVITIYA 2026",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}