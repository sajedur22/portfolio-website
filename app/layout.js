import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Sajedur Rahman Shakil",
    description: "my portfolio website",
    icons: {
        icon: "/myphoto.ico", // এখানে favicon path
    },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" href="/myphoto.ico" type="image/ico"/>
          <title>Sajedur Rahman Shakil</title>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
      </body>
      </html>
  );
}

