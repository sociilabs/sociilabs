import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "sociilabs",
  description: "360 degree creative design and development studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
