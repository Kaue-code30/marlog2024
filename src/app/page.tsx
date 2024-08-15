"use client"

import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import Footer from "@/components/footer";
import NewHome from "@/components/newHome";
import VantagesOurServices from "@/components/vantagesOurServices";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <NewHome/>
      <OurServices/>
      <AboutUs/>
      <VantagesOurServices/>
      <ContactForm/>
      <Footer/>
    </main>
    </QueryClientProvider>
  );
}
