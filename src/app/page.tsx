import Header from "@/components/Header";
import HomeSection from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HomeSection/>
    </main>
  );
}
