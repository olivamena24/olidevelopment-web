import "./globals.css";

export const metadata = {
  title: "Oli Development LLC",
  description:
    "Desarrollo Web, Apps, Sistemas Empresariales y Automatización",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}