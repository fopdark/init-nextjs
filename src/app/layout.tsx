import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/map/GoogleMap";
import { getSliderList } from "@/services/slider";
import { getContract } from "@/services/profile";
import { getContact } from "@/services/contact";
import { getServices } from "@/services/service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiepKienHuy",
  description: "Fopdark@gmail.com",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const contact = await getContact();
  const services = await getServices();
  return (
    <html lang="en">
      <body className={inter.className} style={{background: 'white' }}>
        <AntdRegistry>
          <Header contact={contact} services={services}/>
          {children}
          <Footer />
          <GoogleMap />
        </AntdRegistry>
      </body>
    </html>
  );
}
