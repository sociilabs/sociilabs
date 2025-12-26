import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Intercom from '@intercom/messenger-js-sdk';

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "sociilabs",
  description: "360 degree creative design and development studio",
};

export default function RootLayout({ children }) {
  Intercom({
    app_id: 'p6d30xsk',
  });

  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
      <GoogleAnalytics gaId={`G-XMGN485TPP`} />
    </html>
  );
}
