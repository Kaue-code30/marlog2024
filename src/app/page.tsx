import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import Footer from "@/components/footer";
import VantagesOurServices from "@/components/vantagesOurServices";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HomeSection/>
      <OurServices/>
      <AboutUs/>
      <VantagesOurServices/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
