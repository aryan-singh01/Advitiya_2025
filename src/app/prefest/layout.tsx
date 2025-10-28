import NavBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function PrefestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
