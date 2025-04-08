import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "My Next.js App",
  description: "A Next.js application",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        {children}
        <Toaster
          position="top-center" 
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fb923c",
            },
            iconTheme: {
              primary: "#fb923c",
              secondary: "#333", 
            },
          }}
        />
      </body>
    </html>
  );
}
