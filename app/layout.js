import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
 
  subsets: ["latin"],
  weight:['400','500','600','700'],
});

const ovo = Ovo({
  weight:['400'],
  subsets: ["latin"],
});

export const metadata = {
  title: "PortFolio-ritu 🚀",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
