import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVIR | Luxury Electronics Showroom",
  description:
    "AVIR is a premium electronics showroom and custom technology studio for luxury displays, private cinema, high-fidelity audio, and smart-home experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
