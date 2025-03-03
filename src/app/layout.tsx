import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/png" />
        <title>Multi Step Form</title>
      </head>
      <body className="bg-sky-100">
        {children}
      </body>
    </html>
  );
}
