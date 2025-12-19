import NavBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import SocialMediaLink from "@/components/socialMediaSection";
import SocialSidebar from "@/components/socialMediaSection";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavBar/>
        <SocialSidebar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}