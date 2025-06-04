import "./globals.css";

import Header from "@/components/Organisms/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
