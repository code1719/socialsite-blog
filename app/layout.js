
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechConnectU",
  description: "TechConnectU: Where Innovation Meets Connection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        <Navbar />
        {children}
       </AuthContextProvider>
        </body>
    </html>
  );
}
