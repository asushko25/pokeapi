import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Pokemon Browser",
  description: "App for browsing Pokemons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pikachu.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}
