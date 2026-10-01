import { Outfit, Roboto, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin", "greek"], weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin", "greek"],
  weight: ["400"],
  display: 'swap',
});

const noto = Noto_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
})


export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${noto.className} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
