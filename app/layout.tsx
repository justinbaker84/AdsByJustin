import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Ads By Justin - Google Ads Specialist",
  description: "Professional Google Ads management and digital marketing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-76WQ3X1GMW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-76WQ3X1GMW');
          `}
        </Script>
      </head>
      <body 
        className="antialiased"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
