"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Attend from "@/components/Attend";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    event: useRef(null),
    ecosystems: useRef(null),
    contact: useRef(null),
  };

  const scrollToRef = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full flex flex-col overflow-hidden">
      <Header scrollToRef={scrollToRef} />
      <section ref={sectionRefs.home} className="flex flex-col gap-4 lg:gap-10">
        <div>
          <Hero />
        </div>
        <div>
          <Logos />
        </div>
        <div>
          <Attend />
        </div>
      </section>
      <section>
        <div ref={sectionRefs.about} className="py-10">
          <div className="flex flex-col gap-0">
            <Vision />
          </div>
          <div>
            <Mission />
          </div>
        </div>
      </section>
      <section ref={sectionRefs.event} className="my-10">
        <Events />
      </section>
      <section ref={sectionRefs.ecosystems} className="my-10">
        <Ecosystem />
      </section>
      <section ref={sectionRefs.contact} className="my-10">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
