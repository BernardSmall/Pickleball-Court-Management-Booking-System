import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club Court Booking",
  description: "Pickleball club court booking prototype",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
