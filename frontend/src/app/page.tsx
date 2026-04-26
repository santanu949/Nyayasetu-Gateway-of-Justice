"use client";
import Index from "@/components/Index";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Service from "@/components/service";
import Footer from "@/components/footer";
import "@/styles/home.css";


export default function Home() {
  return (
  
 /* <Index /> */
 <div>
  <Nav/>
  <main>
    <Hero/>
    <Service/>
  </main>
  <Footer/>
 </div>

  );
}
